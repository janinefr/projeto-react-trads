import styled from 'styled-components';


export const ContentSection = styled.section`
    display: flex;
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
	height: 100vh;
	background-position: center;
	background-size: cover;
    background-color: #F5F5F5;
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
    position: relative;
`;


export const TextWrapper = styled.div`
    max-width: 60%;
    

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


    ul li{
        display: inline-flex;
        justify-content: center; 
        align-items: center;
        list-style: none;
        margin: 3em 1em 0 0;

        
}


    ul li svg{
        width: 24px;
        height: 24px;
        color: #3A5ECF;
        cursor: pointer;
    }

    ul li span {
        margin-left: 10px; /* Margem entre o ícone e o texto */
        color: #212C4F;
        font-family: Work Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 133.333% */
        letter-spacing: 0.346px;
        
    }

`;

export const TopLine = styled.div`
    color: #212C4F;
    font-family: Public Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px; /* 150% */
    letter-spacing: 0.389px;
    text-transform: uppercase;
    margin-bottom: 1.3rem;
`;
export const Heading = styled.h2`
    color: #212C4F;
    font-family: Work Sans;
    font-weight: 500;
    font-size: 40px;
    font-style: normal;
    line-height: normal;

    @media  (max-width: 956px) {
        font-size: 35px;   
     }
	@media screen and (max-width: 768px) {
		text-align: center;
        font-size: 30px;   
	}
    
    
`;

export const Subtitle = styled.p`
    margin-top: 56px;   
    color: #212C4F;
    font-family: Public Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 30px; /* 150% */
    letter-spacing: 0.48px;
    @media screen and (max-width: 768px) {
		
        font-size: 16px;   
	}
`;

export const ImageWrapper = styled.div`
    
    position:absolute;
    top: 0;
    width: 30%;
    right: 0;
    overflow: hidden;
    height: 100vh;
    width: 40%;


    img{
        object-fit: cover;
        height: 100%;

        
    }

    @media screen and (max-width: 768px) {
    display: none;
    }

    @media screen and (max-width: 768px) {
    display: none;
    }

   

`;


