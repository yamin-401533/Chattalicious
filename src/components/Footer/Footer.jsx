import React from "react";
import { assets } from "../../assets/assets";
import './Footer.css';
import logo from '../../assets/logo2.png'; // Corrected import path

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={logo} alt="Logo" />
          <p>
            Experience delicious food, delivered fast.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <a href="#navbar"><li>Home</li></a>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @slytherin.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;