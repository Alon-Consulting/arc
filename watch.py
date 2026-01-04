#!/usr/bin/env python3
import os
import time
import subprocess
from pathlib import Path
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

class FileChangeHandler(FileSystemEventHandler):
    def __init__(self):
        self.last_modified = time.time()
    
    def on_modified(self, event):
        if event.is_directory:
            return
        
        # Ignore certain files
        if any(x in event.src_path for x in ['.git', '.DS_Store', 'watch.py', '.pyc']):
            return
        
        # Debounce rapid changes
        current_time = time.time()
        if current_time - self.last_modified < 0.5:
            return
        
        self.last_modified = current_time
        print(f"File changed: {event.src_path}")
        self.trigger_reload()
    
    def trigger_reload(self):
        # Send reload signal via osascript (macOS)
        try:
            subprocess.run([
                'osascript', '-e',
                'tell application "Google Chrome" to tell the active tab of its first window to reload'
            ], timeout=2)
        except:
            pass
        
        # Also try Safari
        try:
            subprocess.run([
                'osascript', '-e',
                'tell application "Safari" to do JavaScript "location.reload()" in current tab of front window'
            ], timeout=2)
        except:
            pass

if __name__ == "__main__":
    event_handler = FileChangeHandler()
    observer = Observer()
    observer.schedule(event_handler, path='.', recursive=True)
    observer.start()
    
    print("Watching for file changes... (Press Ctrl+C to stop)")
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
