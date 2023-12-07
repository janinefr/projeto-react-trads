import React, { useRef } from 'react';
import { Container } from '../../globalStyles';
import { TextWrapper, TopLine, Heading, Group1, Group2, CarouselSection, } from '../Carousel/CarouselStyles';
import group1 from '../../assets/Group1.png';
import group2 from '../../assets/Group2.png';
// import video from '../../assets/video-player.png';
// import arrowLeft from '../../assets/arrow-btnL.png';
// import arrowRight from '../../assets/arrow-btnR.png';
import { GoStarFill } from "react-icons/go";
import { register } from 'swiper/element/bundle'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import carouselData from './CarouselData';
import { Swiper, SwiperSlide } from 'swiper/react'

register();




const Carousel = () => {

    // const carousel = useRef(null);

    // const handleLeftClick = (e) => {
    //     e.preventDefault();
    //     console.log(carousel.current.offsetWidth);

    // };

    // const handleRightClick = (e) => {
    //     e.preventDefault();
    //     console.log(carousel.current.offsetWidth);

    // };

    const data = [
        {
            id: '1',
            name: 'Isabela Fontes',
            description: 'Leo diam egestas aliquet etiam sed odio tortor sit. Ultricies feugiat mauris tempor odio eu massa amet sagittis. Fringilla enim vel arcu amet, condimentum sagittis. Lectus consequat pellentesque nibh convallis lacus, id. Orci, morbi sagittis, vel lobortis. Felis pellentesque maecenas aliquam turpis velit aliquam diam eget. Tincidunt amet aliquam ultricies nec. Commodo cras fringilla sed morbi velit semper iaculis. Vitae, lacinia nisl, sed velit orci. Nunc feugiat pellentesque pretium convallis. Arcu netus non, nunc et est sed venenatis in. Ut vulputate viverra quisque turpis nulla. Facilisis blandit sagittis, laoreet quis amet..',
            icons: 5,
            image: require('../../assets/video-player.png'),
        },

        {
            id: '2',
            name: 'Isabela Fontes',
            description: 'Fringilla enim vel arcu amet, condimenamet.',
            icons: 5,
            image: require('../../assets/video-player.png'),
        }


    ]


    return (
        <CarouselSection id="feedbacks">
            <Container>
                <TextWrapper>
                    <TopLine>feedbacks</TopLine>
                    <Heading>O que nossos clientes estão dizendo</Heading>
                </TextWrapper>

                <div className='container'>
                    <Swiper

                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation

                    >


                        {data.map((item) => (
                            <SwiperSlide key={item.id}>

                                <div className='item'>
                                    <img src={item.image} alt="video" className='slide_image' />
                                    <div className='slide_text'>
                                        <span className='slide_text1' >{item.name}</span>
                                        <span className='slide_text2'>{item.description}</span>
                                    </div>
                
                                    
                                </div>
                                <div className='icons'>
                                        {Array.from({ length: item.icons }).map((_, index) => (
                                            <GoStarFill key={index} />
                                        ))}
                                    </div>

                            </SwiperSlide>



                        ))}
                    </Swiper>

                </div>




                {/* <div className='carousel' ref={carousel}>
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
                </div> */}




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