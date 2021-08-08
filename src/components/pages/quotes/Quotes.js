import React, { Component } from "react";

export default class Quotes extends Component {
  render() {
    return (
      <div>
        <div className="card light-blue darken-4 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <strong># Favourite Quotes</strong>
            </h6>
            <hr />
            <p className="grey-text text-lighten-3 pt">
              <blockquote className="side-block">There's no shortcuts in Life. - Jai</blockquote>
              <blockquote className="side-block">Without Music,Life would be a Mistake. - Friedrich Nietzsche</blockquote>
              <blockquote className="side-block">If you gaze long into an abyss, the abyss also gazes into you. - Friedrich Nietzsche</blockquote>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
