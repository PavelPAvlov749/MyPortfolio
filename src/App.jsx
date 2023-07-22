import React from "react";
import { MainPage, Navbar } from "./Components/MainPage";
import { AboutPage } from "./Components/AboutPage";
import { Stack } from "./Components/Stack";
import { Projects } from "./Components/Projects";
import { Contacts } from "./Components/Contacts";
import { Controls } from "./Components/Controls";
import { Header } from "./Components/Header";


export const App = () => {
    return (
        <main className="App">
            <Header/>
            <Navbar/>
            <div className="content">
            <MainPage></MainPage>
            <AboutPage/>
            <Stack/>
            <Projects/> 
            <Contacts/>
            </div>
        
       
        </main>
    )
}