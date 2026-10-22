#!/usr/bin/env bash

# Robust Watchdog script for Next.js dev server
# 1. Ensures single instance via PID lockfile
# 2. Supervises ./node_modules/.bin/next dev directly
# 3. Restarts immediately if process exits
# 4. Probes HTTP health on http://localhost:3000 every 5 seconds
# 5. Clears corrupt build cache if 4 consecutive health checks fail
# 6. Ignores SIGHUP so terminal disconnects don't terminate the watcher

LOCKFILE="/tmp/srmglobalhospitals_watcher.pid"

if [ -f "$LOCKFILE" ]; then
  OLD_PID=$(cat "$LOCKFILE" 2>/dev/null)
  if [ -n "$OLD_PID" ] && kill -0 "$OLD_PID" 2>/dev/null; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [Watcher] Another watcher instance (PID: $OLD_PID) is already running. Exiting."
    exit 0
  fi
fi

echo "$$" > "$LOCKFILE"

trap '' SIGHUP

cleanup() {
  echo ""
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [Watcher] Shutting down supervisor..."
  rm -f "$LOCKFILE"
  if [ -n "$SERVER_PID" ] && kill -0 "$SERVER_PID" 2>/dev/null; then
    kill -TERM "$SERVER_PID" 2>/dev/null
    wait "$SERVER_PID" 2>/dev/null
  fi
  PORT_PID=$(lsof -ti :3000 2>/dev/null)
  if [ -n "$PORT_PID" ]; then
    kill -9 $PORT_PID 2>/dev/null
  fi
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [Watcher] Stopped."
  exit 0
}

trap cleanup SIGINT SIGTERM

start_server() {
  PORT_PID=$(lsof -ti :3000 2>/dev/null)
  if [ -n "$PORT_PID" ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [Watcher] Freeing port 3000 (PID: $PORT_PID)..."
    kill -9 $PORT_PID 2>/dev/null
    sleep 1
  fi

  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [Watcher] Launching Next.js dev server..."
  ./node_modules/.bin/next dev &
  SERVER_PID=$!
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [Watcher] Server process PID: $SERVER_PID"
}

start_server
FAIL_COUNT=0

while true; do
  sleep 5

  # Check 1: Is process still running?
  if ! kill -0 "$SERVER_PID" 2>/dev/null; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [Watcher] Server process ($SERVER_PID) terminated! Auto-restarting..."
    start_server
    FAIL_COUNT=0
    continue
  fi

  # Check 2: HTTP Health check
  HTTP_STATUS=$(curl -s -m 4 -o /dev/null -w "%{http_code}" http://localhost:3000 2>/dev/null || echo "000")

  if [ "$HTTP_STATUS" = "200" ] || [ "$HTTP_STATUS" = "304" ]; then
    FAIL_COUNT=0
  else
    FAIL_COUNT=$((FAIL_COUNT + 1))
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [Watcher] Health check warning: status $HTTP_STATUS (attempt $FAIL_COUNT/4)"

    if [ "$FAIL_COUNT" -ge 4 ]; then
      echo "[$(date '+%Y-%m-%d %H:%M:%S')] [Watcher] Dev server unhealthy for 4 checks. Cleaning cache and restarting..."
      kill -9 "$SERVER_PID" 2>/dev/null
      rm -rf .next
      sleep 1
      start_server
      FAIL_COUNT=0
    fi
  fi
done
