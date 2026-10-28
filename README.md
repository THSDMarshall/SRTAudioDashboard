# Stockton Round Table Audio Dashboard — v3.3

Full replacement website package. Upload the contents of this ZIP (not the ZIP itself) to the root of your GitHub Pages repository. Commit to main and allow GitHub Pages to publish.

Changes:
- Automatically requests Safari audioSession `play-and-record` before microphone capture, matching the successful iPad test.
- Keeps microphone processing (echo cancellation, noise suppression, automatic gain control) disabled.
- Adds Audio Output Status and Resume Audio button on the Live screen.
- Logs session changes, microphone connection/disconnection, and Web Audio state changes.
- Updates offline service-worker cache to v3.3.

Your existing music, pads and settings live in the browser's IndexedDB; they are not in this ZIP. Do not clear Safari website data. Test with the same origin and in the same Safari/PWA context where your data was imported.

Note: The web app cannot force iPadOS to choose a physical output device. Test the UMC22 and charging separately before a live event.
