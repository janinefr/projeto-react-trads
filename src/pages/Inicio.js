import React from "react";
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features.js';
import List from "../components/List/List.js";
import Content from "../components/Content/Content.js";
import Footer from "../components/Footer/Footer.js";
import Carousel from "../components/Carousel/Carousel.js";



const Inicio = () => {
    return (
        <>

            <Hero />
            <Features />
            <Carousel/>
            <List />
            <Content/>
            <Footer/>
        </>
    )
};

export default Inicio;