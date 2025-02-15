import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="app__footer flex__center section__padding">
      <div className="app__footer-heading">
        <h1 style={{color: "#263238"}} className="headtext__cormorant">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <button className="custom__button demo__btn">
          Get Demo
          <span className="arrow-left">
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004" stroke="white" stroke-width="1.1" stroke-linecap="round"/>
          </svg>
          </span>
        </button>
      </div>
      <div className="app__footer-content"></div>
    </div>
  );
};

export default Footer;
