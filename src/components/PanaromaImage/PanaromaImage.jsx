import React, { useState } from "react";
import GymImage from "../../Assets/PanaromaImages/gym_room.jpg";
import GameImage from "../../Assets/PanaromaImages/gaming_room.png";
import ConferenceImage from "../../Assets/PanaromaImages/conference_room.png";
import { Button, Modal } from "react-bootstrap";
import { Pannellum } from "pannellum-react";

function PanaromaImage() {
  const [show, setShow] = useState(false);
  const [panaImage, setPanaImage] = useState("");
  const [imageName, setImageName] = useState("");

  const showModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <div className="container">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={GymImage}
            class="d-block mx-lg-auto img-fluid rounded"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Construction Site Gym Hall
          </h1>
          <p className="lead">
            Within the bustling activity of a construction site lies a sanctuary
            dedicated to physical well-being - the Gym Hall. Nestled amidst
            towering cranes and echoing machinery, this space serves as a vital
            retreat for workers to recharge and strengthen their bodies.
            Equipped with state-of-the-art exercise equipment and ample space
            for stretching and weightlifting, the Gym Hall offers a respite from
            the rigors of construction labor. Here, amidst the clang of weights
            and the steady rhythm of cardio machines, workers find solace and
            empowerment, building not only structures but also their own
            physical resilience.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => {
                setPanaImage(GymImage);
                setImageName("Gym 360 View");
                showModal();
              }}
            >
              View 360 Image
            </button>
          </div>
        </div>
      </div>
      <div className="row flex-lg-row align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={GameImage}
            class="d-block mx-lg-auto img-fluid rounded"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Creating the Ultimate Gaming Room
          </h1>
          <p className="lead">
            Transforming downtime into a haven of entertainment, the gaming room
            stands as an essential feature of any construction site. Amidst the
            hustle and bustle of heavy machinery and rigorous work schedules,
            this dedicated space offers a retreat where workers can unwind and
            recharge. Complete with state-of-the-art consoles, comfortable
            seating, and immersive gaming setups, the gaming room fosters
            camaraderie and relaxation among the team. From friendly
            competitions to moments of respite, it serves as a vital component
            of morale-building and employee well-being on-site.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
              onClick={() => {
                setPanaImage(GameImage);
                setImageName("Gameing Room 360 View");
                showModal();
              }}
            >
              View 360 Image
            </button>
          </div>
        </div>
      </div>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={ConferenceImage}
            class="d-block mx-lg-auto img-fluid rounded"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Conference Room Facility
          </h1>
          <p className="lead">
            In the dynamic world of construction, effective communication and
            collaboration are paramount to project success. To facilitate
            seamless coordination among stakeholders, our construction site
            boasts a state-of-the-art conference room. This dedicated space
            serves as a hub for project meetings, brainstorming sessions, and
            strategy discussions. Equipped with modern amenities and comfortable
            seating, the conference room provides a conducive environment for
            team members, architects, engineers, and clients to exchange ideas,
            review plans, and make critical decisions.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
              onClick={() => {
                setPanaImage(ConferenceImage);
                setImageName("Conference Room 360 View");
                showModal();
              }}
            >
              View 360 Image
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}

      <Modal size="lg" centered show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{imageName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Pannellum
            width="100%"
            height="500px"
            image={panaImage}
            pitch={10}
            yaw={180}
            hfov={110}
            autoLoad
            showZoomCtrl={false}
          ></Pannellum>
        </Modal.Body>
      </Modal>

      {/* End */}
    </div>
  );
}

export default PanaromaImage;
