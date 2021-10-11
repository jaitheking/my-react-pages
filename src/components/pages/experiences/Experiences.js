import React, { Component } from "react";

export default class Experiences extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong>
                <i className="fas fa-tools"></i> EXPERIENCES
              </strong>
            </h6>
            <hr />
            <div className="row mt">
            <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong>Machine Learning Engineer</strong>
                    <span>2021 - Present</span>
                  </h6>
                  <p className="pt">
                  Responsible for the backend development &amp; data processing for data analytics related projects
                  </p>
                </blockquote>
              </div>
              
              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong>Intermediate Software Engineer</strong>
                    <span>2020 - 2021</span>
                  </h6>
                  <p className="pt">
                  Responsible for capturing user requirements &amp; in charge of several software modules of internal software solution.
                  </p>
                </blockquote>
              </div>

              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong>Software Engineer</strong>
                    <span>2017 - 2020</span>
                  </h6>
                  <p className="pt">
                  Development &amp; maintenance of web applications, console applications, data preparation &amp; transformation process (ETL)
                  </p>
                </blockquote>
              </div>

              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong>Industrial Trainee</strong>
                    <span>Mar 2016 - Jun 2016</span>
                  </h6>
                  <p className="pt">
                  Familiarised myself with the knowledge of the IT team involvement in the manufacturing industry.
                  </p>
                </blockquote>
              </div>

              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong>Computer Lab Assistant</strong>
                    <span>2012-2013</span>
                  </h6>
                  <p className="pt">
                    I was given an opportunity to work part-time at my college as a computer lab assistant. During this period, I picked several useful skills such as desktop PC assembly &amp; repair, office network management and customer support.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
