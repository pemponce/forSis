import './App.css';
import Appbar from "./components/Appbar";
import Person from "./components/Person";
import React from "react";

import bers from "./img/bers.jpg"

function App() {
    return (
        <body>
        <div className="page">

            <div>
                <Appbar/>
                <Person/>

            </div>

        </div>
        </body>
    );
}

export default App;
