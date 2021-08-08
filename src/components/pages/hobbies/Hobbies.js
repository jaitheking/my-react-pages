import React, { Component } from "react";

export default class Hobbies extends Component {
  render() {
    return (
      <div>
        <div className="card light-blue darken-4 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <strong># Hobbies</strong>
            </h6>
            <hr />
            <p className="grey-text text-lighten-3 pt">
              <blockquote className="side-block">Coding</blockquote>
              <blockquote className="side-block">Listening to Music/Podcase</blockquote>
              <blockquote className="side-block">Reading articles from Hacker News</blockquote>
              <blockquote className="side-block">Indulging myself with Anime &amp; Manga</blockquote>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
