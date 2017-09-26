// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {VRInstance} from 'react-vr-web';

const SimpleRaycaster = {
  getType: () => "simple",
  getRayOrigin: () => [0, 0, 0],
  getRayDirection: () => [0, 0, -1],
  drawsCursor: () => true
};

function viewInVR(e) {
  if (e.target) {
    vr.rootView.context.worker.postMessage({
      type: 'viewInVR'
    });
  }
}

function init(bundle, parent, options) {
  const vr = new VRInstance(bundle, 'GazeButtonOnGearVR', parent, {
    raycasters: [
        SimpleRaycaster // Add SimpleRaycaster to the options
    ],
    cursorVisibility: "visible", // Add cursorVisibility
    ...options,
  });
  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();
  window.vr = vr;
  window.addEventListener('vrdisplaypresentchange', viewInVR);
  return vr;
}

window.ReactVR = {init};
