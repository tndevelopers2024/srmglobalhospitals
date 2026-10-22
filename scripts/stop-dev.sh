#!/usr/bin/env bash

# Stops the Next.js dev server and its watcher supervisor

LOCKFILE="/tmp/srmglobalhospitals_watcher.pid"

if [ -f "$LOCKFILE" ]; then
  WATCHER_PID=$(cat "$LOCKFILE" 2>/dev/null)
  if [ -n "$WATCHER_PID" ] && kill -0 "$WATCHER_PID" 2>/dev/null; then
    echo "Stopping watcher (PID: $WATCHER_PID)..."
    kill -TERM "$WATCHER_PID" 2>/dev/null
  fi
  rm -f "$LOCKFILE"
fi

pkill -f "watch-dev.sh" 2>/dev/null

PORT_PID=$(lsof -ti :3000 2>/dev/null)
if [ -n "$PORT_PID" ]; then
  echo "Stopping server on port 3000 (PID: $PORT_PID)..."
  kill -9 $PORT_PID 2>/dev/null
fi

echo "Dev server and watcher stopped."
