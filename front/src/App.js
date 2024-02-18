import './App.css';
import React from "react";
import SomeInformation from "./components/SomeInformation.js";
import DayPlan from "./components/DayPlan.js";
import Person from "./components/Person.js";
import TextAndDateInformation from "./components/TextAndDateInformation.js";


function App() {
    return (

        <body>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap" rel="stylesheet"/>
        </head>

        <div className="page">

            <div>
                <SomeInformation/>
                <TextAndDateInformation/>
                <DayPlan/>
                <Person/>
            </div>

        </div>
        </body>
    );
}

export default App;
