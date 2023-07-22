import React, { useRef, useState } from "react";
import "../Styles/Projects.less"
import { projects } from "../Model/ProjectsModel";
import gitIcon from "../Assets/Icons/icons8-github-100.png"
import AppIcon from "../Assets/Icons/icons8-web-96.png"

  
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
                <ul className="projects__links_list">
                    <ul className="projects__links_list--list_item">
                        <img src={gitIcon} className="gitIcon" alt="" />
                        <a className="git_icon_link" href={props.props.gitLink}>GitHub </a>
                    </ul>
                    <ul className="projects__links_list--list_item">
                        <img src={AppIcon} className="gitIcon" alt="" />
                        <a className="git_icon_link" href={props.props.link}>Visit App </a>
                    </ul>
                </ul>


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
    const [touchStart, setTouchStart] = React.useState(0);
    const [touchEnd, setTouchEnd] = React.useState(0);

    function handleTouchStart(e) {
        setTouchStart(e.targetTouches[0].clientX);
    }

    function handleTouchMove(e) {
        setTouchEnd(e.targetTouches[0].clientX);
    }
    function handleTouchEnd() {
        if (touchStart - touchEnd > 150) {
            // do your stuff here for left swipe
            setOffset(0)
        }

        if (touchStart - touchEnd < -150) {
            // do your stuff here for right swipe
            setOffset(galeryRef.current.offsetWidth)
        }
    }
    return (
        <section className="projects_page_container" onTouchStart={handleTouchStart} handleTouchMove={handleTouchMove} handleTouchEnd={handleTouchEnd} >



            <div className="slider" ref={galeryRef}  >
       
                <div className="slider_line" style={{ transform: `translateX(-${offset}px)` }}>
                    {projects.map((el, index) => <SingleProject key={index} props={el} offset={offset} />)}
                </div>
                <ul className="dots">
                    <li className="item" onClick={() => { setOffset(0) }}></li>
                    <li className="item" onClick={() => { setOffset(galeryRef.current.offsetWidth) }} ></li>

                </ul>
            </div>


        </section>
    )
}

