import React from "react";
import { useState } from "react";
import soundIcon from "../Assets/Icons/volume.png"
import track01 from "../Assets/Sounds/track01.mp3"  


export const Controls = () => {

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
                {/* <audio src={track01} autoplay={autoplay ? "on" : "off"} class="sound"></audio> */}
                <img onClick={toggleAutoplayByClick} src={soundIcon} className="sound_button" alt="" />

            
                <a className="resume_button">
                    Resume
                </a>
            </section>
        </>
    )
}