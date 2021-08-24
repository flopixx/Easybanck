import React from "react";
import Logo from "../images/logoo.svg";
import face from "../images/icon-facebook.svg";
import ins from "../images/icon-instagram.svg";
import pin from "../images/icon-pinterest.svg";
import twi from "../images/icon-twitter.svg";
import you from "../images/icon-youtube.svg";
import Button from "./Button/Button";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer ">
      <a className="footer-image" href="#">
        <img src={Logo} alt="" />
      </a>
      <div className="footer-social">
        <a href="#">
          <img src={face} alt="" />
        </a>

        <a href="#">
          <img src={you} alt="" />
        </a>
        <a href="#">
          <img src={twi} alt="" />
        </a>
        <a href="#">
          <img src={ins} alt="" />
        </a>
        <a href="#">
          <img src={pin} alt="" />
        </a>
      </div>
      <div className="footer-links col1">
        <a href="#">About us</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
      </div>
      <div className="footer-links col2">
        <a href="#">Careers</a>
        <a href="#">Support</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div className="foter-cta">
        <Button title="Request Invite" />
        <div className="footer-copyy">
          &copy; Easybank. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
