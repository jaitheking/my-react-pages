import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className="card light-blue darken-4 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <strong># CHECK OUT MY SKILLS</strong>
            </h6>
            <hr />
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">
                  OOP &amp; DESIGN PATTERNS
                </p>
                <div className="progress white">
                  <div
                    className="determinate green accent-2"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">C#/C++</p>
                <div className="progress white">
                  <div
                    className="determinate green accent-2"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">
                  DATA DESIGN &amp; STRUCTURES
                </p>
                <div className="progress white">
                  <div
                    className="determinate green accent-2"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">LINUX</p>
                <div className="progress white">
                  <div
                    className="determinate green accent-2"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">WEB DEV(HTML, CSS, JS, REST API)</p>
                <div className="progress white">
                  <div
                    className="determinate green accent-2"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">PYTHON</p>
                <div className="progress white">
                  <div
                    className="determinate green accent-2"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
