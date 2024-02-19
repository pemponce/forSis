import './App.css';
import React from "react";
import SomeInformation from "./components/SomeInformation.js";
import DayPlan from "./components/DayPlan.js";
import Person from "./components/Person.js";
import TextAndDateInformation from "./components/TextAndDateInformation.js";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Users from "./components/Users";
import PlaceInformation from "./components/PlaceInformation";

function MainPage() {

    return (
        <html>
        <head>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap" rel="stylesheet"/>

        </head>
        <body>


        <div className="page">

            <div>
                <SomeInformation/>
                <TextAndDateInformation/>
                <DayPlan/>
                <PlaceInformation/>
                <Person/>
            </div>

        </div>
        </body>
        </html>
    )
}

function UserCheckPage() {
    return (
        <body>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap" rel="stylesheet"/>
        </head>

        <div className="page">

            <div>
                <Users/>
            </div>

        </div>
        </body>
    )
}


function App() {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/users" element={<UserCheckPage/>}/>
            </Routes>
        </Router>

    );
}

export default App;
