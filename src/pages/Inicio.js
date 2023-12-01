import React from "react";
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features.js';
import List from "../components/List/List.js";
import List2 from "../components/List2/List2.js";
import Content from "../components/Content/Content.js";
import Footer from "../components/Footer/Footer.js";
import Carousel from "../components/Carousel/Carousel.js";



const Inicio = () => {
    return (
        <>

            <Hero />
            <Features />
            <List />
            <Carousel/>
            <List2 />
            <Content/>
            <Footer/>
        </>
    )
};

export default Inicio;