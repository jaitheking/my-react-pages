import React,{Component } from 'react'

export default class About extends Component{
    render(){
        return(
            <div>
                <div className="card z-depth-0 hide-on-med-and-down pt">
                    <div className="card-content social">
                        <h2 className="grey-text text-darken-3">
                        <strong>JAIPRASHANTH RAMALINGAM
                        </strong>
                        </h2>
                        <h5 className="grey-text text-darken-1">Software Engineer</h5>
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
            </div>
        )
    }
}