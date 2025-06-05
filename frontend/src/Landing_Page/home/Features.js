import React from 'react';

function Features(){
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <h1 className="head" style={{ opacity: "0.8" }}>
          Everything You Need in One Place
        </h1>
        <h3 className="h3">
          From registration to growth, we’ve got you covered.
        </h3>
        <div className="row">
          <div className="col-3">
            <i
              class="fa-solid fa-file-contract"
              style={{ marginRight: "10px" }}
            ></i>
            Quick and easy registration process tailored for startups..
          </div>
          <div className="col-3">
            <i class="fa-solid fa-globe" style={{ marginRight: "10px" }}></i>
            Access to a network of investors and funding programs.
          </div>
          <div className="col-3">
            <i class="fa-solid fa-brain" style={{ marginRight: "10px" }}></i>
            Learn from experienced mentors and industry leaders.
          </div>
          <div className="col-3">
            <i
              class="fa-solid fa-chart-mixed"
              style={{ marginRight: "10px" }}
            ></i>
            Track your startup’s progress with our intuitive dashboard.
          </div>
        </div>
      </div>
    );
}

export default Features;