import React from "react"
import phoneIcon from "../Assets/Icons/icons8-phone-100.png"
import mailIcon from "../Assets/Icons/icons8-mail-100.png"
import telegram from "../Assets/Icons/icons8-telegram-150.png"
import "../Styles/Contacts.less"
import planet from "../Assets/planet.gif"

export const Contacts = () => {
    return (
        <div className="contacts_container" id="contacts">
            <div className="animation_container" id="container"></div>
            <section className="contacts">
            <h1>Contacts : </h1>
            <h2>Russian Federation,Omsk</h2>
            <div className="contact_list">
            <img src={phoneIcon} alt="" />
            <a href="tel:+79658751073">NUMBER : +79658751073</a>
            <br />
            <img src={mailIcon} alt="" />
            <a href="mailto:unklefraid@gmail.com">Mail : unklefraid@gmail.com</a>
            <br />
            <img src={telegram} alt="" />
            <span>Telegram : +79658751073</span>
            <br />
            </div>

            </section>
            <div className="planet">
                <img src={planet} alt="" />
                
            </div>
         

        </div>
    )
}