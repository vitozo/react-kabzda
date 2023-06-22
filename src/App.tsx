import React from 'react';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log("App rendering");
    return (
        <div>
            This is APP component
            <Cars/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
};

function Cars() {
    console.log("Cars rendering");
    return (
        <div>
            <ul className="list">
                <li className="item">BMW</li>
                <li className="item">AUDI</li>
                <li className="item">MERCEDES</li>
            </ul>
        </div>
    )
};

;

;
export default App;
