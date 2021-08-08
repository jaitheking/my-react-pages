import React, { Component } from 'react'
import ImgProfile from "../../images/MyProfile.jpg";

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div className="avatarImg">
                    <img className="circle responsive-img" src={ImgProfile} alt="How I look in 2021" />
                </div>
                <div className="card light-blue darken-4 z-depth-0 hide-on-large-only">
                    <div className="card-content center social">
                        <h2 className="grey-text text-lighten-3"><strong>
                            Jaiprashanth Ramalingam</strong></h2>
                        <h5 className="grey-text text-lighten-1">Software Engineer</h5>
                        <a href="https://www.facebook.com/jaitheking/" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-facebook-square fa-2x"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/jaiprashanth93" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://github.com/jaitheking" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-github-square fa-2x"></i>
                        </a>
                    </div>
                </div>
                <div className="card light-blue darken-4 z-depth-0">
                    <div className="card-content">
                        <h6 className="white-text">
                            <strong># Who am I</strong>
                        </h6>
                        <hr />
                        <p className="grey-text text-lighten-3 pt">
                        Firstly, you can call me Jay. I am a 28 years-old Malaysian Software Engineer who has experience dealing with Front-end and Back-end development.
                        <br/>
Honestly, my education is still ongoing cause I am never going to stop learning new things.

                        </p>
                    </div>
                </div>
            </div>
        )
    }
}