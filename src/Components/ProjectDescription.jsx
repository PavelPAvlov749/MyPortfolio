import React from "react";
import gitIcon from "../Assets/Icons/icons8-github-100.png"
import "../Styles/Project.less"

export const ProjectExample = (props) => {
 
    return (
        <div className="projectExample">
        <section className="project_description">
            <h1>{props.props.name}</h1>
            <description>{props.props.shortDescription}</description>
            <br />
            <span>{props.props.stack}</span>
            <p>
                {props.props.fullDescription}
            </p>
            <a href={props.props.link}>GitHub {">"}</a>
        </section>
      
        <div className="images">
            <img src={props.props.img[0]} alt="" />
        </div>
    </div>
    )
}