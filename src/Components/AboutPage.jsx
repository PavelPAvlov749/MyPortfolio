import React from "react";

export const AboutPage = () => {
    
    return (
        <div className="about_container" id="about">
            {/* ANIMATION PARTICLES */}
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <div className="short_description">
                <h1>Hi,I'm Pavel
                    <br />
                    Web Developer</h1>
                <br />
                <span>Frontend | JavaScript | React</span>
            </div>
            <div className="full_description">
                <p>
                    Well-organised person, loyal employee with high attention to detail.
                    Fan of Bass playing, outdoor activities,
                    Linux, and coding of course.
                    Interested in the entire frontend spectrum.
                </p>
        
            </div>

        </div>
    )
}

