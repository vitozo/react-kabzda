import React from 'react';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log("App rendering");
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"Second component"}/>
            <Cars/>
            <Accordion titleValue={"Accordion title"} collapsed={false}/>
            <Accordion titleValue={"Second title"} collapsed={true}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
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

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
