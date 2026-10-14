#!/usr/bin/env bash

# Watchdog script for Next.js development server
# Monitors the dev server and automatically restarts it if it exits or crashes.

cleanup() {
  echo ""
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] Received shutdown signal. Terminating dev server..."
  if [ -n "$SERVER_PID" ] && kill -0 "$SERVER_PID" 2>/dev/null; then
    kill -TERM "$SERVER_PID" 2>/dev/null
    wait "$SERVER_PID" 2>/dev/null
  fi
  # Clean up any remaining process on port 3000
  PORT_PID=$(lsof -ti :3000 2>/dev/null)
  if [ -n "$PORT_PID" ]; then
    kill -9 $PORT_PID 2>/dev/null
  fi
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] Watcher stopped."
  exit 0
}

trap cleanup SIGINT SIGTERM SIGHUP

echo "[$(date '+%Y-%m-%d %H:%M:%S')] [Watcher] Dev server supervisor started."

while true; do
  # Ensure port 3000 is clean before starting
  PORT_PID=$(lsof -ti :3000 2>/dev/null)
  if [ -n "$PORT_PID" ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [Watcher] Port 3000 is held by PID $PORT_PID. Cleaning up..."
    kill -9 $PORT_PID 2>/dev/null
    sleep 1
  fi

  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [Watcher] Starting 'npm run dev'..."
  npm run dev &
  SERVER_PID=$!

  # Wait for dev server process to exit
  wait $SERVER_PID
  EXIT_CODE=$?

  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [Watcher] Dev server (PID: $SERVER_PID) exited with code $EXIT_CODE."
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [Watcher] Restarting in 2 seconds..."
  sleep 2
done
