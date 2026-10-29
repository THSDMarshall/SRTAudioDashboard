/* iPad playback-and-microphone preference. Must load before app.js. */
(()=>{'use strict';
  function applyAudioRouting(){
    if(!navigator.audioSession)return false;
    try{navigator.audioSession.type='play-and-record';return navigator.audioSession.type==='play-and-record';}
    catch(e){console.warn('Audio session setting unavailable:',e);return false;}
  }
  window.srtApplyAudioRouting=applyAudioRouting;
  applyAudioRouting();
})();
