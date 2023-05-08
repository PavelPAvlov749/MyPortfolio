import React, { useState } from "react";
import soundIcon from "../Assets/Icons/volume.png"
import track01 from "../Assets/Sounds/track01.mp3"


export const Navbar = () => {
    return (
        <section class="navbar">
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
            <section class="top_control_buttons">
                <div class="name_logo">
                    PVLV_DEV:
                </div>
                {/* <audio src={track01} autoplay={autoplay ? "on" : "off"} class="sound"></audio> */}
                <img onClick={toggleAutoplayByClick} src={soundIcon} class="sound_button" alt=""/>

                    <div class="language_switcher">en</div>

                    <button class="resume_button">
                        Resume
                    </button>
            </section>
            <section class="main_page" id="mainPage">
             
                <section class="welcome">
                    <h1>Welcome</h1>
                    <span>Hello! My name is Pavel</span><br />
                    <p>
                        Resolving design problems, building smart user interfaces and useful interactions,
                        developing rich web applications and seamless web experiences.
                    </p>
                    <a href="#about" class="aboutButton">{"About >"}</a>
                </section>

            </section>
        </>
    )
}