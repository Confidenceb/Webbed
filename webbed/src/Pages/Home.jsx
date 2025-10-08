import React from "react";
import Navbar from "../Components/Navbar";
import "./Home.css";

const Home = () => (
  <div className="home-page">
    <section className="hero-section">
      <h3 className="hero-welcome">Welcome to Webbed</h3>
      <h1 className="hero-title">
        <em>Beyond trust, Verifiable..</em>
      </h1>
      <div className="hero-btn-group">
        <button className="hero-btn white">Get started</button>
        <button className="hero-btn blue">SignUp</button>
      </div>
    </section>
  </div>
);

export default Home;
