import React from "react";
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features.js';
import List from "../components/List/List.js";
import Content from "../components/Content/Content.js";



const Inicio = () => {
    return (
        <>

            <Hero />
            <Features />
            <List />
            <Content/>
        </>
    )
};

export default Inicio;