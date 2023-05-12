import React, { useRef, useState } from "react";
import "../Styles/Projects.less"
import phone from "../Assets/project.png"
import gitIcon from "../Assets/Icons/icons8-github-100.png"

export const Projects = () => {
    const projects = [{
        name: "NotInstagram",
        shortDescription: "Social Network",
        description: "",
        details: "",
        img: []
    }]
    // REF
    const galeryRef = useRef()
    //Elements Offset
    const [offset, setOffset] = useState(0)

    return (
        <section className="projects_container" id="projects" ref={galeryRef}>
            <div className="carousel" >
                <div className="window" >
                    <div className="all_pages_container" style={{ transform: `translateX(-${offset}px)` }}>
                        <div className="one">
                            <section className="one_description">
                                <h1>NotInstagram</h1>
                                <description>Social - Network | Graduation Project</description>
                                <br />
                                <span>React | Redux | Google-Cloud-Functions | Formik</span>
                                <p>
                                    Graduation project for the course "ReactJS the Way of Samurai".
                                    Implemented in React, Redux, Typescript and Google Cloud Platform as server solution.
                                </p>
                                <img src={gitIcon} className="gitIcon" alt="" /><a href="">GitHub</a>
                            </section>
                            <div className="images">
                                <img src={phone} alt="" />
                            </div>
                        </div>
                        <div className="two">
                            <section className="description">
                                <h1>BarApp</h1>
                                <description className="description">Bartenders work platform</description>
                                <br />
                                <span>React | Redux | less | Google-Cloud-Functions</span>
                                <p>
                                    A platform designed to simplify the routine organizational tasks of bars.
                                    Train employees, facilitate work with technological maps.
                                </p>
                            </section>
                            <div className="images">
                                <img src={phone} alt="" />
                            </div>
                        </div>
                      
                    </div>

                </div>
                <ul className="dots">
                    <li className="item" onClick={() => { setOffset(0) }}></li>
                    <li className="item" onClick={() => { setOffset(galeryRef.current.offsetWidth) }}></li>
                    <li className="item" onClick={() => { setOffset(galeryRef.current.offsetWidth * 2 + 80) }}></li>
                </ul>
            </div>
        </section>
    )
}