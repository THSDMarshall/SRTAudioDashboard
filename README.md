# Audio Dashboard v3.5 — Sleigh Stop (based on v3.3)

This release starts from v3.3, **before** the UMC22 simulation. It preserves the iPad Playback + Microphone fix and Audio Output Status panel.

## Install
Upload all ZIP contents to the root of your existing GitHub Pages repository, replacing the corresponding files. The browser's IndexedDB name is unchanged, so imported music and pads should remain in the same browser installation. Do not clear site data. Close and reopen the PWA after the new deployment to let the offline service worker refresh.

## Sleigh Stop
In Setup choose one of:
- Mute LEFT channel
- Mute RIGHT channel
- Reduce both master output channels to 50% linear amplitude (approximately -6 dB)

On Live, tap **SLEIGH STOP** to engage and **RESUME OUTPUT** to disengage. This affects the final stereo Web Audio mix of music, jingles and *software-monitored* microphone. It does not mute a microphone passing through the Behringer UMC22's hardware Direct Monitor path or an amplifier's own controls. The existing STOP ALL AUDIO control remains separate.

The selected mode persists. The engaged/disengaged state resets to OFF when the app is reloaded. Test both left and right with a stereo track and the actual interface before a public event.
