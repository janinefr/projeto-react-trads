import styled from 'styled-components';



export const CarouselSection = styled.section`
    position: relative;
    display: flex;
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    height: 100vh;
    background-color: #212C4F;
    background-position: center;
    background-size: cover;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
    z-index: -1;

    .container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row-reverse;
        gap: 24px;
        max-width: 100vw;
        height: 510px;
        flex-shrink: 0;
        border-radius: 4px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%);
        backdrop-filter: blur(10px);
        padding-right: 50px;
        padding-left: 50px;
        z-index: 1;
    
      
        .item {
            max-width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: row;
            align-items: center;
            object-fit: cover;
            margin: 30px;
          }   

          .slide_image{
            width: 25vw;
            @media screen and (max-width: 915px) {
                display: none; 
               }
          }

          .slide_text{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: left;
            margin: 20px;
          }

          .slide_text1{
            color: #FFF;
            font-family: Work Sans;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px; /* 112.5% */
            letter-spacing: 0.518px;
            margin-bottom: 24px;
          }

          .slide_text2{
            color: #FFF;
            font-family: Work Sans;
            font-size: 16px;
            font-style: normal;
            font-weight: 300px;
            line-height: 24px; /* 150% */
            letter-spacing: 0.307px;
            
          }

          .icons{
            display: flex;
            justify-content: center;
            margin-left: -80px;
            margin-top: -30px;
            color: #F3C141;
            font-size: 30x;
          }

          .swiper-button-next{
            color: #FFFFFF;
          }

          .swiper-button-prev {
            color: #FFFFFF; 
            // background: #007bff;
            // border-radius: 50%; 
            // width: 40px; 
            // height: 40px; 
            // display: flex; 
            // justify-content: center; 
            // align-items: center; 
          }
          

          .swiper-pagination-bullet {
            width: 32px;
            height: 8px;
            border-radius: 4px; 
            margin: -10px 5px; /* Espaçamento entre marcadores */
          }

          .swiper-wrapper{
            margin-bottom: 40px;
          }

          
        }


    // .container .carousel{
    //     display: flex;
    //     justify-content: center; 
    //     align-items: center; 
    //     flex-direction: row-reverse; 
    //     overflow-x: auto;
    //     width: 100%;
    //     scroll-behavior: smooth;

    // }

    // .container .carousel::-webkit-scrollbar{
    //     display: none;
    // }

    // .container .carousel .item {
    //     display: flex;
    //     justify-content: center; 
    //     align-items: center; 
    //     flex-direction: row; 
    //     flex:none;

    //   }
    

    // .container .carousel .item .image img{
    //     max-width: 30vw;
    //     height: 100%;
    //     object-fit: cover;
    //     position: relative;
    //     overflow: hidden;
    // }

    // .container .carousel .item .info{
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: space-between;
    //     max-width: 50%;
    //     margin-left: 1rem;
    //     margin-top: 1rem;
        
    // }

    //  .info span{
    //     display: block;
    //     text-align: left;
    //     color: white;
    //     padding: 5px;
    
    // }
    
    // .name{
    //     font-size: 1.2rem;
    //     margin: 10px 0;
    //     font-family: Work Sans;
    //     font-style: normal;
    //     font-weight: 600;
    //     line-height: 27px; /* 112.5% */
    //     letter-spacing: 0.518px;
    // }

    // .description{
    //     font-family: Work Sans;
    //     font-size: 0.8rem;
    //     font-style: normal;
    //     font-weight: 400;
    //     line-height: 24px; /* 150% */
    //     letter-spacing: 0.307px;
        
    // }

    // .icons{
    //     display: flex;
    //     align-items: flex-start;
    //     gap: 8px;
    //     color: #F3C141;
    // }

    // .buttons {
    //     position: absolute;
    //     top: 50%; /* Ajuste conforme necessário para posicionar verticalmente */
    //     left: 0;
    //     right: 0;
    //     transform: translateY(-50%); /* Centraliza verticalmente */
    //     display: flex;
    //     justify-content: space-between;
    //     width: 100%;
    //     z-index: 1;
    //   }
      
    //   .buttons button {
    //     background-color: transparent;
    //     border: none;
    //     cursor: pointer;


    //   img{
    //     max-width: 50%;
    //   }

      
      
     
      
`;

export const Group1 = styled.div`
    position:absolute;
    left: 0;
    width: 873px;
    height: 990px;
    overflow: hidden;
    bottom: 0;
    
    
    img{
        position: absolute;
        bottom: 0;
        overflow: hidden;
        
    }

@media screen and (max-width: 1495px) {
 display: none; /* Esconder o contêiner em telas menores que 768px */
}
`;

export const Group2 = styled.div`
position:absolute;
width: 1920px;
height: 1000px;
flex-shrink: 0;
overflow: hidden;
right: 0;

img{
    position: absolute;
    top: 0px;
    right: 0;
}

@media screen and (max-width: 1495px) {
 display: none; /* Esconder o contêiner em telas menores que 768px */
}
`;


export const TextWrapper = styled.div`
    max-width: 100%;
    margin-bottom: 80px;
    

    @media screen and (max-width: 768px) {
        padding: 40px 0 60px 0;		
        > h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
        max-width: 100%;

	}
`;

export const TopLine = styled.div`
color: #FFF;
text-align: center;
font-family: Public Sans;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 27px; /* 150% */
letter-spacing: 0.389px;
text-transform: uppercase;
`;


export const Heading = styled.h2`
color: #FFF;
text-align: center;
font-family: Work Sans;
font-size: 40px;
font-style: normal;
font-weight: 500;
line-height: normal;

    @media  (max-width: 956px) {
        font-size: 35px;   
     }
	@media screen and (max-width: 768px) {
		text-align: center;
        font-size: 30px;   
	}
    
    
`;

