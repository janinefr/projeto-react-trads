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

    @media screen and (max-width: 915px) {
        overflow: hidden;
        text-align: center;
        width: 100%;
      }
`;


export const TextWrapper = styled.div`
    max-width: 60%;
    

    @media screen and (max-width: 915px) {
        padding: 40px 0 60px 0;		
        > h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
        max-width: 100%;
        margin-top: 50px;

	}



    ul li{
        display: inline-flex;
        justify-content: center; 
        align-items: center;
        list-style: none;
        margin: 3em 1em 0 0;
        @media screen and (max-width: 915px) {
            margin-top: 1.3em;
            text-align: center;
      
          }

        
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
        @media screen and (max-width: 915px) {
            font-size: 14px;
      
          }
        
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

    @media screen and (max-width: 915px) {
      font-size: 15px;
      

	}

`;
export const Heading = styled.h2`
    color: #212C4F;
    font-family: Work Sans;
    font-weight: 500;
    font-size: 40px;
    font-style: normal;
    line-height: normal;

	@media screen and (max-width: 915px) {
        text-align: center;
        font-size: 18px;   
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
    @media screen and (max-width: 915px) {
        margin-top: 30px;   
        font-size: 14px;   
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

    @media screen and (max-width: 915px) {
    display: none;
    }


   

`;


