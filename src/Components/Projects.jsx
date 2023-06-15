import React, { useRef, useState } from "react";
import "../Styles/Projects.less"
import { projects } from "../Model/ProjectsModel";
import { ProjectExample } from "./ProjectDescription";
import gitIcon from "../Assets/Icons/icons8-github-100.png"


export const SingleProject = (props) => {
    const pictureRef = useRef()
   
    // pictureRef.current.max-width

    return (
        <section id="projects" className="single_project_container">
            <div className="text_info">
            <h1>{props.props.name}</h1>
            <span>{props.props.shortDescription}</span>
            <br />
            <span>{props.props.stack}</span>
            <p>
                {props.props.fullDescription}
            </p>
          
            <a href={props.props.link}> 
            <img src={gitIcon} className="gitIcon" alt="" /></a>
            </div>
            <div className="photos">
                <img src={props.props.img[0]} ref={pictureRef} alt="" />
            </div>

        </section>
    )
}

export const Projects = () => {
    const galeryRef = useRef()
    const [offset, setOffset] = useState(0)

    return (
        <section className="projects_page_container"  >
            <div className="slider" ref={galeryRef}>
                <div className="slider_line"  style={{ transform: `translateX(-${offset}px)` }}>
                    {projects.map((el,index) => <SingleProject key={index} props={el} offset={offset}/>)}
                </div>
                <ul className="dots">
                    <li className="item" onClick={() => { setOffset(0) }}></li>
                    <li className="item" onClick={() => { setOffset(galeryRef.current.offsetWidth) }} ></li>
                   
                </ul>
            </div>


        </section>
    )
}

