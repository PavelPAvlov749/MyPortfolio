import React from "react"
import { YMap } from "./Map"
import phoneIcon from "../Assets/Icons/icons8-phone-100.png"
import linkedin from "../Assets/Icons/icons8-linkedin-150.png"
import instagram from "../Assets/Icons/icons8-instagram-150.png"
import mailIcon from "../Assets/Icons/icons8-mail-100.png"
import telegram from "../Assets/Icons/icons8-telegram-150.png"
import "../Three/PlanetScene"


export const Contacts = () => {
    return (
        <div className="contacts_container" id="contacts">
            <div className="animation_container" id="container"></div>
            <section className="contacts">
            <h1>Contacts : </h1>
            <h2>Russian Federation,Omsk</h2>
            <img src={phoneIcon} alt="" />
            <span>Tel : +79658751073</span>
            <br />
            <img src={mailIcon} alt="" />
            <span>Mail : unlefraid@gmail.com</span>
            <br />
            <img src={telegram} alt="" />
            <span>Telegram : +79658751073</span>
            <br />
            <img src={linkedin} alt="" />
            <span>LinkedIn : #</span>
            </section>
            {/* <YMap/> */}

        </div>
    )
}