import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpeg";
import search from "../assets/search.svg";
import connect from "../assets/connect.svg";
import setting from "../assets/setting.svg";
import arrow from "../assets/downarrow.svg";
import Webbedtext from "../assets/Webbed.svg";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-left">
      <div className="logo-container">
        <img src={logo} alt="Webbed Logo" className="navbar-logo" />
        <span className="navbar-title">
          <img className="icon" src={Webbedtext} alt="" />
        </span>
      </div>
      <a href="#" className="navbar-link">
        Discover{" "}
        <span>
          {" "}
          <img className="icon" src={arrow} alt="" />
        </span>{" "}
      </a>
      <a href="#" className="navbar-link">
        Learn{" "}
        <span>
          {" "}
          <img className="icon" src={arrow} alt="" />
        </span>{" "}
      </a>
    </div>
    <div className="navbar-right">
      <span className="navbar-search">
        <img className="icon" src={search} alt="" />
      </span>
      <button className="navbar-btn">
        <span>
          {" "}
          <img className="icon" src={connect} alt="" />
        </span>{" "}
        Connect Wallet
      </button>
      <button className="navbar-btn secondary">Verified Portfolio</button>
      <span className="navbar-settings">
        {" "}
        <img className="icon" src={setting} alt="" />
      </span>{" "}
    </div>
  </nav>
);

export default Navbar;
