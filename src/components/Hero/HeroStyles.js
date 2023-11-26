import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  justify-content: center; 
  align-items: center; 
  flex-direction: column; 
  height: 100vh;
  background-color: #212C4F;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
`;

 export const StyledSVG1 = styled.svg`
 position: absolute;
 left: 0;
 top: 620px;
 @media screen and (max-width: 930px) {
  display: none; /* Esconder o contêiner em telas menores que 768px */
}
`;

export const StyledSVG2 = styled.svg`
 position: absolute;
 left: 0;
 @media screen and (max-width: 930px) {
  display: none; /* Esconder o contêiner em telas menores que 768px */
}
`;

export const StyledSVG3 = styled.svg`
 position: absolute;
 right: 0;
 top: 160px;
 @media screen and (max-width: 930px) {
  display: none; /* Esconder o contêiner em telas menores que 768px */
}
`;

export const StyledSVG4 = styled.svg`
 position: absolute;
 top: 180px;
 right: 0;
 @media screen and (max-width: 930px) {
  display: none; /* Esconder o contêiner em telas menores que 768px */
}
`;