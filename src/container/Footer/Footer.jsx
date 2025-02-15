import React from "react";
import "./Footer.css"
import {images} from "../../components/constants"

const fontStyle = {
  color: "#F5F7FA",
  fontSize: "14px"
}

const Footer = () => {
  return (
    <div className="app__footer flex__center">
      <div className="app__footer-heading  section__padding">
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
      <div className="app__footer-content">
        <div className="app__footer-content_container section__padding">
            <div className="app__footer-logo">
              <img src={images.lightLogo} alt="" />
              <p className="p__opensans" style={{color: "#F5F7FA", fontSize: "14px", marginTop: "1rem"}}>
              Copyright © 2020 Nexcent ltd.
              </p>
              <p className="p__opensans" style={{color: "#F5F7FA", fontSize: "14px",marginBottom: "1rem"}}>
              All rights reserved
              </p>
              <img src={images.social} alt="" />
            </div>
            <div className="app__footer-gallery">
              <div className="left">
                  <h1 className="p__cormorant" style={{color: "#F5F7FA", fontSize: "25px"}}>Company</h1>
                  <p className="p__opensans" style={fontStyle}>About Us</p>
                  <p className="p__opensans" style={fontStyle}>Blog</p>
                  <p className="p__opensans" style={fontStyle}>Contact us</p>
                  <p className="p__opensans" style={fontStyle}>Pricing</p>
                  <p className="p__opensans" style={fontStyle}>Testomonial</p>
              </div>
              <div className="center">
              <h1 className="p__cormorant" style={{color: "#F5F7FA",fontSize: "25px"}}>Support</h1>
                  <p className="p__opensans" style={fontStyle}>Help center</p>
                  <p className="p__opensans" style={fontStyle}>Terms of service</p>
                  <p className="p__opensans" style={fontStyle}>Legal</p>
                  <p className="p__opensans" style={fontStyle}>Privacy policy</p>
                  <p className="p__opensans" style={fontStyle}>Status</p>
              </div>
              <div className="right">
              <h1 className="p__cormorant" style={{color: "#F5F7FA",fontSize: "25px"}}>Stay up to date</h1>
                <input type="text" placeholder="Your email address" />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
