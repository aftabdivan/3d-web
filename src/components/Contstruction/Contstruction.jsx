import React from "react";
import Titanium_Tower from "../../Assets/3DModels/Titanium_Tower.glb";
import Curv_Building from "../../Assets/3DModels/Curv_Building.glb";

function Contstruction() {
  return (
    <div className="container">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <model-viewer
            id="reveal"
            loading="eager"
            camera-controls
            autoplay
            auto-rotate
            ar
            ar-modes="webxr"
            touch-action="pan-y"
            disable-tap
            src={Titanium_Tower}
            shadow-intensity="1"
            alt="A 3D model of a shishkebab"
            style={{ width: "100%", height: "79vh" }}
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Elevating Horizons: The Majestic Presence of Titanium World Tower
          </h1>
          <p className="lead">
            Perched in the heart of the urban skyline, Titanium World Tower
            stands as a testament to architectural ingenuity and structural
            prowess. Its gleaming facade of titanium panels reflects the
            ever-changing hues of the cityscape, while its soaring height
            symbolizes a beacon of progress and modernity.
          </p>
        </div>
      </div>
      <div className="row flex-lg-row align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <model-viewer
            id="reveal"
            loading="eager"
            camera-controls
            autoplay
            auto-rotate
            ar
            ar-modes="webxr"
            touch-action="pan-y"
            disable-tap
            src={Curv_Building}
            shadow-intensity="1"
            alt="A 3D model of a shishkebab"
            style={{ width: "100%", height: "79vh" }}
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Sculpted Splendor: The Curv Architectural Marvel
          </h1>
          <p className="lead">
            In the heart of the city skyline stands Curv, an architectural
            masterpiece that defies convention with its graceful curves and
            sleek lines. Designed to evoke a sense of fluidity and harmony, this
            iconic structure captivates both the eye and the imagination. As
            sunlight dances upon its undulating surface, Curv invites onlookers
            to experience a new dimension of urban elegance, blending form and
            function in perfect balance.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contstruction;
