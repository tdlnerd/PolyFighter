var FPS = 10;
function Awake () {
     QualitySettings.vSyncCount = 0;  // VSync must be disabled
     Application.targetFrameRate = FPS;
 }