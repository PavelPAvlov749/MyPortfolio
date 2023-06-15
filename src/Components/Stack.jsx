import React from "react";
import "../Styles/Stack.less"
import vsCode from "../Assets/Icons/icons8-visual-studio-150.png"
import reactIcon from "../Assets/Icons/icons8-react-120.png"
import reduxIcon from "../Assets/Icons/icons8-redux-150.png"
import webpackIcon from "../Assets/Icons/icons8-webpack-128.png"
import threeIcon from "../Assets/Icons/three-icon.png"
import jsIcon from "../Assets/Icons/icons8-javascript-150.png"
import tsIcon from "../Assets/Icons/icons8-typescript-150.png"
import gitIcon from "../Assets/Icons/icons8-git-150.png"
import lessIcon from "../Assets/Icons/icons8-less-logo-128.png"
import npmIcon from "../Assets/Icons/icons8-npm-128.png"
import htmlIcon from "../Assets/Icons/icons8-html-5-150.png"
import cssIcon from "../Assets/Icons/icons8-css3-150.png"


export const Stack = () => {
    const icons = [vsCode,reactIcon,reduxIcon,webpackIcon,threeIcon,jsIcon,tsIcon,gitIcon,
    ]
    const icons_2 = [lessIcon,npmIcon,htmlIcon,cssIcon]
    return (
        <div className="stack_container" id="stack">
            <section className="stack_text">
            <h1>Frontend Skills & Technologies</h1>
            <p>HTML, CSS, JS, building small and medium web applications with React,  <br />
             animations, and coding interactive layouts.
            </p>
            </section>
         
            <section className="icons_container">
                {icons.map((el,index) => {
                    return (
                        <>
                            
                            <img key={index} src={el} alt="" />
                            
                        </>
                    )
                })}
                <br />
                {icons_2.map((el,index) => {
                    return (
                        <>
                            <img key={index} src={el} alt="" />
                        </>
                    )
                })}
            </section>
        </div>
    )
}