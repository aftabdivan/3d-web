import React from "react";
import Aftab from "../../Assets/Images/AD_logo.jpg";

function About() {
  return (
    <div class="px-4 py-5 my-5 text-center">
      <img
        class="d-block mx-auto mb-4 rounded"
        src={Aftab}
        alt=""
        width="72"
        height="57"
      />
      <h1 class="display-5 fw-bold text-body-emphasis">Aftab Divan</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          Hello! I'm Aftab Divan, a passionate MERN stack developer with a keen
          interest in creating immersive web experiences. Through my journey in
          web development, I've honed my skills in React and leveraged its power
          to craft engaging and dynamic projects. One of my recent endeavors is
          this website, which serves as a showcase of my proficiency in
          Three.js, a JavaScript library for creating 3D graphics on the web.
          Here, I've brought together my expertise in React and Three.js to
          demonstrate my capability in building captivating and interactive web
          applications.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            class="btn btn-primary btn-lg px-4 gap-3"
            onClick={() =>
              window.open("https://aftabdivan.github.io/aftab-portfolio/")
            }
          >
            My Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
