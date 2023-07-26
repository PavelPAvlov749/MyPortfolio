import React from "react";
import "../Styles/Header.less"

export const Header = () => {
    return (
        <header className="top_control_buttons">
            <h1 className="name_logo">PVLV_DEV:</h1>
            <a className="resume_button" id="resume_button" href="https://drive.google.com/file/d/1LYL7p9HCgZeFuyTSbC5Cf4d03685aw2G/view?usp=sharing">
                Resume</a>
        </header>
    )
}