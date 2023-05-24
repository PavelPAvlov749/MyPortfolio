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
            <section class="top_control_buttons">
                <div class="name_logo">
                    PVLV_DEV:
                </div>
                {/* <audio src={track01} autoplay={autoplay ? "on" : "off"} class="sound"></audio> */}
                <img onClick={toggleAutoplayByClick} src={soundIcon} class="sound_button" alt="" />

                <div class="language_switcher">en</div>

                <button class="resume_button">
                    Resume
                </button>
            </section>
        </>
    )
}