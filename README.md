# Audio Dashboard v3.6 — Sleigh Stop + iPad Routing + MP3 Fix

This replaces the v3.5 ZIP. Upload **all files** in this ZIP to the repository root, replacing existing files. Do not clear Safari website data or delete the PWA: music and soundboard are stored in IndexedDB under the unchanged database name.

Fixes:
- Explicit MP3/WAV/M4A/AAC/OGG/FLAC selectors for music and soundboard on iPad.
- Restored `audio-routing-fix.js` and a script reference before `app.js` in `index.html`.
- Requests the `play-and-record` audio session before microphone activation (when Safari supports it).
- Updated offline service-worker cache to include the routing fix.
- Retains the three Sleigh Stop modes, toggle button, and Audio Output Status panel.

Test on your iPad after deploying. Safari may retain an old service worker temporarily: close/reopen the PWA, and reload after GitHub Pages finishes publishing. If necessary visit the URL in Safari and refresh there. Do not clear website data.

Sleigh Stop affects browser-generated stereo music/jingles and software-monitored mic, not the UMC22 hardware Direct Monitor microphone.
