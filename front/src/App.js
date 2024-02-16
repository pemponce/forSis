import './App.css';
import Person from "./components/Person";
import React from "react";
import SomeInformation from "./components/SomeInformation";
import TextAndDataInformation from "./components/TextAndDataInformation";

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
                <TextAndDataInformation/>
                <Person/>
            </div>

        </div>
        </body>
    );
}

export default App;
