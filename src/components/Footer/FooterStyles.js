import styled from 'styled-components';


export const FooterSection = styled.section`
    display: flex;
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
	height: 400px;
	background-position: center;
	background-size: cover;
    background-color: #FFFFFF;
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
    position: relative;
    text-align: center;

    

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
`;

export const Heading = styled.h2`
    color: #3A5ECF;
    font-family: Work Sans;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 40px;

    @media  (max-width: 956px) {
        font-size: 35px;   
     }
	@media screen and (max-width: 768px) {
		text-align: center;
        font-size: 30px;   
	}
    
    
`;
export const Cotacao = styled.div`

display: inline-flex;
flex-direction: column; 
align-items: center; 
text-align: center;
position: absolute;
top: 100px;
right: 200px;

svg{

    width: 35px;
    height: 35px;
    color: #3A5ECF;
    cursor: pointer;
}

span {
    color: #3A5ECF;
    font-family: Work Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 109.9%; /* 13.188px */
    text-transform: uppercase;
    
}

@media screen and (max-width: 962px) {
    position: absolute;
    top: 65px;
    right: 10%; /* Centraliza o botão à direita */
    z-index: 999; /* Garante que o botão esteja acima de outros elementos */
    padding: 10px; /* Adiciona um espaço interno ao redor do botão */

    svg {
      width: 25px; /* Reduz o tamanho do ícone */
      height: 25px;
    }

    span {
      font-size: 12px; /* Reduz o tamanho da fonte */
    }
  }
`;


export const Subtitle = styled.p`
    color: #212C4F;
    font-family: Public Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px; /* 168.75% */
    letter-spacing: 0.346px;

    @media screen and (max-width: 768px) {
		
        font-size: 16px;   
	}
`;