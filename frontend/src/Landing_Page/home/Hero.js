import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="main">
      <div className="hero-container">
        <h1 className="heading"> Launch Your Startup Journey Today</h1>
        <p style={{ marginLeft: "" }}>
          Register your startup in minutes and unlock exclusive benefits like
          funding opportunities, mentorship,
          <br /> and global exposure.
        </p>
        <Link
          to={"/signUp"}
          className="btn"
          style={{ backgroundColor: "#90EE90" }}
        >
          Get started
        </Link>
      </div>
    </div>
  );
}
export default Hero;
