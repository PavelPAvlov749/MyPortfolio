import React, { useState } from "react";
import soundIcon from "../Assets/Icons/volume.png"
import track01 from "../Assets/Sounds/track01.mp3"


export const Navbar = () => {
    return (
        <section className="navbar">
        <ul>
            <li><a href="#mainPage">01.MainPage</a></li>
            <li><a href="#about">02.About</a></li>
            <li><a href="#stack">03.Stack</a></li>
            <li><a href="#projects">04.Projects</a></li>
            <li><a href="#contacts">05.Contacts</a></li>

        </ul>
    </section>
    )
}


export const MainPage = () => {
    const [autoplay,setAutoplay] = useState(false)

    const toggleAutoplayByClick = () => {
        
        setAutoplay(prev => !prev)

    }

    return (
        <>
            <section className="top_control_buttons">
                <div className="name_logo">
                    PVLV_DEV:
                </div>

                {/* <img onClick={toggleAutoplayByClick} src={soundIcon} className="sound_button" alt=""/> */}

                 

                    <a className="resume_button" id="resume_button" href="https://drive.google.com/file/d/1C-NNPFq2fcS_KpYaCz0rlGpbQLv1biYD/view?usp=sharing">
                        Resume
                    </a>
            </section>
            <section className="main_page" id="mainPage">
             
                <section className="welcome">
                    <h1>Welcome</h1>
                    <span>Hello! My name is Pavel</span><br />
                    <p>
                        Frontend development with React & Typescript, building smart user interfaces and useful interactions,
                        developing web applications.
                    </p>
                    <a href="#about" className="aboutButton">{"About >"}</a>
                </section>
        
            </section>
        </>
    )
}