import styled from 'styled-components';



export const CarouselSection = styled.section`
  display: flex;
  justify-content: center; 
  align-items: center; 
  flex-direction: column; 
  height: 100vh;
  background-color: #212C4F;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  position: relative;
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

export const FCarousel = styled.div`
    position: relative;
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    flex-direction: row-reverse; 
    gap: 24px;
    width: 1504px;
    height: 510px;
    flex-shrink: 0;
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%);
    backdrop-filter: blur(10px);
    padding-right: 50px;
    padding-left: 50px;
    z-index:1;
`;

export const TextCarousel = styled.div`
    max-width: 50%;
    text-align: left;

        h1{
            color: #FFF;
            font-family: Work Sans;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px; /* 112.5% */
            letter-spacing: 0.518px;
        }

        p{
            color: #FFF;
            font-family: Work Sans;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
            letter-spacing: 0.307px;
            margin-bottom: 24px;
            margin-top: 24px;
        }

        svg{
            width: 18px;
            height: 16px;
            color: #F3C141;
            margin-right: 8px;
        }

`;

export const VideoCarousel = styled.div`
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center;
    width: 636px;
    height: 398px;
    border-radius: 4px;
    background: rgba(28, 28, 28, 0.40);
    backdrop-filter: blur(2px);
    z-index:1;

    svg{
        color: white;
    }
       

`;
