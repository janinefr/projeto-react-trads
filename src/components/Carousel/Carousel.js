import React, { useRef } from 'react';
import { Container } from '../../globalStyles';
import { TextWrapper, TopLine, Heading, Group1, Group2, CarouselSection, } from '../Carousel/CarouselStyles';
import group1 from '../../assets/Group1.png';
import group2 from '../../assets/Group2.png';
import video from '../../assets/video-player.png';
import arrowLeft from '../../assets/arrow-btnL.png';
import arrowRight from '../../assets/arrow-btnR.png';
import { GoStarFill } from "react-icons/go";
import { register } from 'swiper/element/bundle'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import carouselData from './CarouselData';

register();




const Carousel = () => {

    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        console.log(carousel.current.offsetWidth);

    };

    const handleRightClick = (e) => {
        e.preventDefault();
        console.log(carousel.current.offsetWidth);

    };


    return (
        <CarouselSection id="feedbacks">
            <Container>
                <TextWrapper>
                    <TopLine>feedbacks</TopLine>
                    <Heading>O que nossos clientes estão dizendo</Heading>
                </TextWrapper>



                <div className='carousel' ref={carousel}>
                    <div className='container'>
                        <div className='buttons'>
                            <button onClick={handleLeftClick}><img src={arrowLeft} alt="left" /></button>
                            <button onClick={handleRightClick}><img src={arrowRight} alt="right" /> </button>
                        </div>


                        {carouselData.map((item) => (
                            <div className="item" key={item.id}>
                                <div className='image'>
                                    <img src={item.image} alt="video" />
                                </div>
                                <div className='info'>
                                    <span className='name'>{item.name}</span>
                                    <span className='description'>{item.description}</span>
                                    <div className='icons'>
                                        {Array.from({ length: item.icons }).map((_, index) => (
                                            <GoStarFill key={index} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>




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