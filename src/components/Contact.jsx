import React from "react";
import "./Contact.css";
import map from "../assets/map_sm.png";
import Btn from "./Btn";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__left">
        <div className="contact__title">
          Let’s Ready to Explore The World With Us.
        </div>
        <div className="contact__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          efficitur ac quam in congue.
        </div>
      </div>

      <div className="contact__mid">
        <img src={map} alt="" className="contact__img" />
      </div>

      <div className="contact__btn">
          <Btn text={"Contact Us"} theme={"light"}/>
      </div>
    </div>
  );
};

export default Contact;
