import React from "react";
import "@google/model-viewer/dist/model-viewer";
import EarthModel from "../../Assets/3DModels/Earth_Model.glb";

function Home() {
  return (
    <div class="px-4 py-5 my-4 text-center">
      <model-viewer
        id="reveal"
        loading="eager"
        camera-controls
        autoplay
        ar
        ar-modes="webxr"
        touch-action="pan-y"
        disable-tap
        src={EarthModel}
        shadow-intensity="1"
        alt="A 3D model of a shishkebab"
        style={{ width: "100%", height: "79vh" }}
      ></model-viewer>
    </div>
  );
}

export default Home;
