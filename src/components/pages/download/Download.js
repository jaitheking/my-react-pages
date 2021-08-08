import React, { Component } from "react";
import {HashLink as Link} from "react-router-hash-link"

export default class Download extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong>
                <i className="fas fa-tools"></i> Download My Files
              </strong>
            </h6>
            <hr />
            <div className="row mt">
              <table className="striped">
                <thead>
                  <tr>
                    <th>File Name</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="new badge blue"></span> CV</td>
                        <td>Aug 2021</td>
                        <td>
                        <Link to="/files/My2021CV.pdf" target="_blank" className='btn blue-lighten-2' download>Download</Link>
                        </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
