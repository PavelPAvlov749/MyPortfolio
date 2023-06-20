import React, { useState } from "react";



export const Navbar = () => {
    return (
        <nav className="navbar">
        <ul>
            <li><a href="#mainPage">01.MainPage</a></li>
            <li><a href="#about">02.About</a></li>
            <li><a href="#stack">03.Stack</a></li>
            <li><a href="#projects">04.Projects</a></li>
            <li><a href="#contacts">05.Contacts</a></li>

        </ul>
    </nav>
    )
}


export const MainPage = () => {


    return (
            <section className="main_page" id="mainPage">
                    <h1>Welcome</h1>
                    <span>Hello! My name is Pavel</span><br />
                    <p>
                        Frontend development with React & Typescript, building smart user interfaces and useful interactions,
                        developing web applications.
                    </p>
                    <a href="#about" className="aboutButton">{"About >"}</a>
            </section>
    )
}