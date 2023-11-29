import React from 'react';
import { Container } from '../../globalStyles';
import { VideoCarousel, TextCarousel, FCarousel, TextWrapper, TopLine, Heading, Group1, Group2, CarouselSection, } from '../Carousel/CarouselStyles';
// import {CarouselSection} from './CarouselStyles'
import group1 from '../../assets/Group1.png';
import group2 from '../../assets/Group2.png';
import { GoStarFill } from "react-icons/go";
import { FaCirclePlay } from "react-icons/fa6";


const Carousel = () => {
    return (
        <CarouselSection id="feedbacks">
            <Container>
                <TextWrapper>
                    <TopLine>feedbacks</TopLine>
                    <Heading>O que nossos clientes estão dizendo</Heading>
                </TextWrapper>
                <FCarousel>
                    <TextCarousel>
                        <h1>Isabela Fontes</h1>
                        <p>Leo diam egestas aliquet etiam sed odio tortor
                            sit. Ultricies feugiat mauris tempor odio eu massa amet sagittis.
                            Fringilla enim vel arcu amet, condimentum sagittis. Lectus consequat pellentesque
                            nibh convallis lacus, id. Orci, morbi sagittis, vel lobortis. Felis pellentesque maecenas
                            aliquam turpis velit aliquam diam eget. Tincidunt amet aliquam ultricies nec. Commodo
                            cras fringilla sed morbi velit semper iaculis. Vitae, lacinia nisl, sed velit orci. Nunc
                            feugiat pellentesque pretium convallis. Arcu netus non, nunc et est sed venenatis in.
                            Ut vulputate viverra quisque turpis nulla. Facilisis blandit sagittis, laoreet quis amet.</p>
                        <GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill />
                    </TextCarousel>
                    <VideoCarousel>
                        <FaCirclePlay />
                    </VideoCarousel>

                </FCarousel>


            </Container>
            <Group1>
                <img src={group1} />
            </Group1>
            <Group2>
                <img src={group2} />
            </Group2>
        </CarouselSection>

    );
};

export default Carousel;