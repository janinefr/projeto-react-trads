import styled from 'styled-components';

export const FeaturesSection = styled.section`
  display: flex;
  justify-content: center; 
  align-items: center; 
  flex-direction: column; 
  height: 100vh;
  background-color: #F5F5F5;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  

 h3{
    color: #212C4F;
    text-align: left;
    font-family: Public Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px; /* 150% */
    letter-spacing: 0.389px;
    text-transform: uppercase;
    margin-bottom: 8px;
   
 }

 h1{
    color: #3A5ECF;
    font-family: Work Sans;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 48px;
 }

 #paragraph{
    color: #212C4F;
    font-family: Public Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.307px;
    margin-bottom: 30px;
 }

 #paragraph #p2{
   margin-top: 30px;
 }

 #numbers{
    display: inline-flex;
    align-items: flex-start;
    gap: 56px;
    @media screen and (max-width: 736px) {
        margin-top: -100px;
      }
 }

 #p_number {
    color: #212C4F;
    font-family: 'Public Sans', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.307px;
  }
  
  .styled {
    color: #3A5ECF;
    font-family: Work Sans;
    font-size: 38px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.73px;
    @media screen and (max-width: 736px) {
        font-size: 20px;
      }
  }

`;



export const StyledImg = styled.img`
  width: 50%;
  height: auto;
`;

export const StyledLogosContainer = styled.div`
  width: 100%; /* Use uma porcentagem para tornar o contêiner responsivo */
  max-width: 1300px; /* Defina um tamanho máximo */
  height: 100px;
  background-color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin: -400px 0 auto; /* Para centralizar horizontalmente */
  @media screen and (max-width: 930px) {
    display: none; /* Esconder o contêiner em telas menores que 768px */
  }
`;

export const StyledLogos = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const StyledCircleSVG = styled.svg`
  position: relative;
  transform: translateY(-90px);
  left: 1250px;
  @media screen and (max-width: 930px) {
    display: none; /* Esconder o contêiner em telas menores que 768px */
  }
`;

export const StyledSVGpdf = styled.svg`
  position: relative;
  transform: translateY(-110px);
  left: 1193px;
  @media screen and (max-width: 930px) {
    display: none; /* Esconder o contêiner em telas menores que 768px */
  }
`;