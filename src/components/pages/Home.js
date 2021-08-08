import React, { Component } from 'react'
import Profile from "../../components/pages/profile/Profile";
import Hobbies from "../../components/pages/hobbies/Hobbies";
import Quotes from "../../components/pages/quotes/Quotes";
import Contact from "../../components/pages/contact/Contact";
import About from "../../components/pages/about/About";
import Skills from "../../components/pages/skills/Skills";
import Experiences from "../../components/pages/experiences/Experiences";
import Educations from "../../components/pages/educations/Educations";
import Download from "./download/Download";

export default class Home extends Component {
    render() {
        return (
            <section>
                <div className="row sameHeight">
                    <div className="col s12 m12 l4 light-blue darken-4 sameHeight_child">
                        <Profile />
                        <Hobbies/>
                        <Quotes/>
                        <Contact />
                        <Skills />
                    </div>
                    <div className="col s12 m12 l8 white sameHeight_child">
                        <About />
                        <Educations />
                        <Experiences />
                        <Download />
                    </div>
                </div>
            </section>
        )
    }
}