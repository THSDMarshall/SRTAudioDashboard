# Audio Dashboard v3 — Event Edition

Tablet-first progressive web app for offline music, jingles and microphone-triggered music ducking.

## Install on iPad / Android

1. Upload the **contents** of this folder to an HTTPS static web host (e.g. GitHub Pages). No server-side code is needed.
2. Visit the HTTPS address in Safari (iPad) or Chrome (Android), wait for the page to load, then add it to your Home Screen.
3. Open the Home Screen app while online once. Import audio via **Library**, and add jingle files via **Setup**.
4. Turn off Wi-Fi and mobile data, close and reopen the Home Screen app, and confirm music/jingles/mic operation **before** relying on it at an event.

A PWA is not a native iOS app. Imported audio is kept in IndexedDB on that device, subject to OS/browser storage policies; clearing website data, reinstalling, or storage eviction can remove it. Keep your original files backed up. HTTPS is required for microphone APIs. A local `file://` launch is not supported.

## Important hardware limitations

USB audio interface support and routing are controlled by iPadOS/Android and browser APIs. Select an available microphone input in Setup; on some iPads the system chooses the device and the browser cannot choose an independent output. Test with your particular interface and PA. Monitor Mic is **off by default** to avoid feedback. Browser audio may be interrupted when the tablet sleeps, switches apps, receives calls or disconnects audio hardware. Screen Wake Lock is attempted where supported, but cannot be guaranteed on iPad.

## Features

- Music import, playlist reorder, previous/next, play/pause/seek, volume
- Soundboard pages, custom colours, replaceable files, per-pad volume and optional ducking
- Long press pads to edit; lock mode to prevent editing
- USB/system microphone selection when exposed, input meter, optional monitor
- Signal-level activity detection (not speech recognition), configurable threshold, attack, hold, release, duck amount
- Overlapping jingles with independent duck triggers and functional Stop Jingles/Stop All
- Master output, output meters and compressor used as a peak limiter
- Setup checklist, wake-lock attempt, offline app shell and IndexedDB audio storage

## Prototype limitations

This is an **untested prototype**, not certified live-show software. STOP ALL stops music and active jingles, but does not mute an enabled microphone monitor (toggle monitoring off or disable the mic to mute that route). The attack/release sliders adjust music gain smoothing, not true broadcast dynamics. Very large audio files may exceed browser storage limits. Playlist changes are saved in IndexedDB; playback position is not. If a page is replaced during an update, cache updates may need an online refresh. No audio export/backup is implemented. Audio input monitoring may cause feedback; use headphones when testing.

## Local desktop development

Run `python -m http.server 8000` in this directory, then open `http://localhost:8000`. For actual tablet microphone access, deploy via HTTPS.
