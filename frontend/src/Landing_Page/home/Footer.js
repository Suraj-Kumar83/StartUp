import React, { Component } from 'react'

function Footer(){
    return (
      <div className="container border-top footer-expand-lg" style={{ marginTop: "50px" }}>
        <a href="/about" style={{ textDecoration: "none", marginLeft: "450px" }}>
          About us
        </a>
        <a href="#" style={{ textDecoration: "none", marginLeft: "10px" }}>
          Private Policy
        </a>
        <a href="#" style={{ textDecoration: "none", marginLeft: "10px" }}>
          Terms of Services
        </a>
        <a href="/contact" style={{ textDecoration: "none", marginLeft: "10px" }}>
          Contact
        </a>
        <br></br>
        <i
          class="fa-brands fa-square-facebook"
          style={{ marginLeft: "550px", fontSize: "30px", marginTop: "20px" }}
        ></i>
        <i
          class="fa-brands fa-x-twitter"
          style={{ marginLeft: "10px", fontSize: "30px" }}
        ></i>
        <i
          class="fa-brands fa-linkedin"
          style={{ marginLeft: "10px", fontSize: "30px", marginBottom: "50px" }}
        ></i>
      </div>
    );
}

export default Footer;