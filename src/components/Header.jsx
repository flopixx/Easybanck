import React, { useState } from "react";
import Button from "./Button/Button";
import "./Header.scss";
import Logo from "../images/logo.svg";
import online from "../images/icon-online.svg";
import bud from "../images/icon-budgeting.svg";
import onb from "../images/icon-onboarding.svg";
import api from "../images/icon-api.svg";

import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setopen] = useState(false);

  const handleclick = () => {
    setopen(!isOpen);
  };
  return (
    <>
      <div className="cont">
        <header className="header">
          <nav className="navv">
            <a href="#" className="logo">
              <img src={Logo} />
            </a>
            <div
              onClick={handleclick}
              id="hide-desktop"
              className={isOpen ? "close" : "hambur"}
            ></div>
            <div className=" linsk  hide-movil">
              <Link to="">Home</Link>
              <Link to="">About</Link>
              <Link to="">Contact</Link>
              <Link to="">Carrers</Link>
            </div>
            <div className="hide-movil">
              <Button title="Request Invite" />
            </div>
          </nav>
          <div className={isOpen ? "links" : "nav-links"}>
            {" "}
            <Link to="">Home</Link>
            <Link to="">About</Link>
            <Link to="">Contact</Link>
            <Link to="">Careers</Link>
          </div>
        </header>

        <section className="hero container">
          <div className="hero-image"></div>
          <div className="hero-text box">
            <h1 className="hero-title">Next generation digital banking </h1>
            <p className="copy">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <Button title="Request Invite" />
          </div>
        </section>
      </div>
      <section className="section">
        <div className="features containerr">
          <h2>Why choose Easybank?</h2>
          <p className="we">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.{" "}
          </p>

          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <img src={online} alt="" />
              </div>
              <div className="feature-title">Online Banking</div>
              <div className="feature-description">
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src={bud} alt="" />
              </div>
              <div className="feature-title">Simple Budgeting </div>
              <div className="feature-description">
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src={onb} alt="" />
              </div>
              <div className="feature-title"> Fast Onboarding</div>
              <div className="feature-description">
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src={api} alt="" />
              </div>
              <div className="feature-title">Open API</div>
              <div className="feature-description">
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
