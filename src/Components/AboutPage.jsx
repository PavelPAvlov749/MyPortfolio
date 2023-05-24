import React from "react";
import gitHubIcon from "../Assets/Icons/icons8-github-100.png"

export const AboutPage = () => {
    return (
        <div className="about_container" id="about">
            <div className="short_description">
                <h1>Hi,I'm Pavel
                    <br />
                    Web Developer</h1>
                <br />
                <span>Frontend | JavaScript | React</span>
            </div>
            <div className="full_description">
                <p>
                    Professionally connected with the web development industry. <br />
                    Problem solver, well-organised person, loyal employee with high attention to detail. <br />
                    Fan of Boxing, outdoor activities, video games, and coding of course. <br />

                    Interested in the entire frontend spectrum and working on ambitious projects with interesting people.
                </p>
                {/* <img src={gitHubIcon} alt="" />
                <a href="https://github.com/PavelPAvlov749?tab=repositories">{"To my github >"}</a> */}
            </div>

        </div>
    )
}

