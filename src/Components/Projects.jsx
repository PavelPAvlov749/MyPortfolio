import React, { useRef, useState } from "react";
import "../Styles/Projects.less"
import { projects } from "../Model/ProjectsModel";
import { ProjectExample } from "./ProjectDescription";

export const Projects = () => {

    // REF
    const galeryRef = useRef()
    //Elements Offset
    const [offset, setOffset] = useState(0)

    return (
        <section className="projects_container" id="projects" ref={galeryRef}>
            <div className="carousel" >
                <div className="window" >
                    <div className="all_pages_container" style={{ transform: `translateX(-${offset}px)` }}>
                      {projects.map((el) => {
                        return (
                            <ProjectExample props={el}/>
                        )
                      })}
                    </div>
                 
                </div>
                <ul className="dots">
                    <li className="item" onClick={() => { setOffset(0) }}></li>
                    <li className="item" onClick={() => { setOffset(galeryRef.current.offsetWidth) }}></li>
                    <li className="item" onClick={() => { setOffset(0) }}></li>
                </ul>
              
            </div>
        </section>
    )
}