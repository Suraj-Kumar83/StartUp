import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom sticky-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/logo.jpg" style={{width:"200px", height:"100px"}} alt="Logo"/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-items">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/features">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/pricing">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/contact">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/signUp">
                  SignUp
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/login">
                  Login
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
