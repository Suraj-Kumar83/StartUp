import React from "react";

function Benefits(){
    return (
      <div className="container">
        <h1 className="head" style={{ opacity: "0.8", marginTop: "100px" }}>
          Why you Choose Us?
        </h1>
        <h3>
          We provide everything you need to kickstart your startup journey.
        </h3>
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-4">
            <i
              class="fa-solid fa-file-contract"
              style={{ marginRight: "10px" }}
            ></i>
            Register your startup in just a few clicks. No hassle, no paperwork.
          </div>
          <div className="col-4">
            <i class="fa-solid fa-globe" style={{ marginRight: "10px" }}></i>
            Connect with investors, mentors, and partners worldwide.
          </div>
          <div className="col-4">
            <i
              class="fa-solid fa-screwdriver-wrench"
              style={{ marginRight: "10px" }}
            ></i>
            Get access to exclusive resources and guidance from industry experts
          </div>
        </div>
      </div>
    );
}

export default Benefits;