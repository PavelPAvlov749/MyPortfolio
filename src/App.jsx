import React from "react";
import { MainPage, Navbar } from "./Components/MainPage";
import { AboutPage } from "./Components/AboutPage";
import { Stack } from "./Components/Stack";
import { Projects } from "./Components/Projects";
import { Contacts } from "./Components/Contacts";
import { Controls } from "./Components/Controls";


export const App = () => {
    return (
        <div className="App">
            <HashRouter>
                    {/* <Controls/> */}
            <Navbar/>
            <div className="content">
            <MainPage></MainPage>
            <AboutPage/>
            <Stack/>
            <Projects/> 
            <Contacts/>
            </div>
            </HashRouter>
        
         
        
       
        </div>
    )
}