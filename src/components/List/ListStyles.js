import styled from 'styled-components';

export const ListSection = styled.section`
  display: flex;
  justify-content: left;
  align-items: left; 
  flex-direction: column; 
  max-height: 2550px;
  padding-bottom: 56px;
  background-color: white;
  background-position: center;
  background-size: cover;
  z-index: 1;
 

  .tableWrapper{
    position: relative;
    
}
.buttonWrapper{
  text-align: right;
  margin-left: 10px;
  
  button{
    font-size: 60px;
    background: none;
    border: none;
    color: #3A5ECF;
}

}

  table {
    margin-top: -20px;
    width: 100%;
    position: relative;
    display: inline-block;
    align-items: left;
    
    
  
  }

.tableClose{
  display:none;
 }

  #tabela1::after {
    content: '';
    position: absolute;
    bottom: -24px; /* Posiciona a linha abaixo do caption */
    left: 0;
    width: 1504px; /* Define a largura da linha */
    height: 1px;
    background: rgba(0, 0, 0, 0.10);
  }

  caption {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60vw;
    color: #3A5ECF;
    font-family: Work Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
    margin-bottom: 24px;
    top: -60px;
    position: relative;
  
  }

  caption::after {
    content: '';
    position: absolute;
    bottom: -24px; /* Posiciona a linha abaixo do caption */
    left: 0;
    width: 1504px; /* Define a largura da linha */
    height: 1px;
    background: rgba(0, 0, 0, 0.10);
  }
  
  .table2{
    padding-top: 50px;

  }
  
  th, td {
    padding: 12px 15px 12px 0;
    // padding-right: 12px; /* Adiciona espaçamento interno */
    // padding-top: 12px;

  }

  th{
    width: 33%;
    text-align: left;
    color: #212C4F;
    font-family: Public Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 200% */
    letter-spacing: 0.23px;
    text-transform: uppercase;
  }

  td{
    margin-right: 100px;
    color: #212C4F;
    font-family: Public Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.307px;
  }

  ////////////

  .tableWrapper2{
    position: relative;
    margin-top: 100px;

    th{
      padding: 20px;
      color: #3A5ECF;
      font-family: Public Sans;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px; /* 200% */
      letter-spacing: 0.23px;
      text-transform: uppercase;
    }

    td{
      padding: 20px;;
      border: none;
      color: #212C4F;
      font-family: Public Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
      letter-spacing: 0.307px;
    }


    #tabela2::after {
      content: '';
      position: absolute;
      bottom: -24px; /* Posiciona a linha abaixo do caption */
      left: 0;
      width: 1504px; /* Define a largura da linha */
      height: 1px;
      background: rgba(0, 0, 0, 0.10);
    }
  }

  .tableWrapper3{
    position: relative;
    margin-top: 100px;

    th{
      padding: 20px;
      width: 2%;
      color: #3A5ECF;
      font-family: Public Sans;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px; /* 200% */
      letter-spacing: 0.23px;
      text-transform: uppercase;
    }

    td{
      padding: 20px;
      color: #212C4F;
      font-family: Public Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
      letter-spacing: 0.307px;
    }

    .redText {
      color: #DE3232;
    }

    .greenText {
      color: #0FB820;
    }

    

    #tabela3::after {
      content: '';
      position: absolute;
      bottom: -24px; /* Posiciona a linha abaixo do caption */
      left: 0;
      max-width: 1504px; /* Define a largura da linha */
      height: 1px;
      background: rgba(0, 0, 0, 0.10);
    }
  }

  .backgroundGrey {
    border-radius: 4px;
    background: #F7F7F7;
    height: 65px;
  }

  .backgroundBlue{
    border-radius: 4px;
    background: #ECEFFB;
    height: 65px;
  }

  .backgroundLightBlue{
    border-radius: 4px;
    background: #029BD80D;
    height: 65px;
    color: #029BD8;

    td{
      color: #029BD8;
      padding: 20px;

    }
  }

    
}
  

`;




export const TextWrapper = styled.div`
    max-width: 100%;
    margin-top: 56px;
    

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
    color: #212C4F;
    font-family: Public Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px; /* 150% */
    letter-spacing: 0.389px;
    text-transform: uppercase;
    margin-bottom: 8px;
`;
export const Heading = styled.h2`
    color: #3A5ECF;
    font-family: Work Sans;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 24px;

    @media  (max-width: 956px) {
        font-size: 35px;   
     }
	@media screen and (max-width: 768px) {
		text-align: center;
        font-size: 30px;   
	}
    
    
`;

export const Subtitle = styled.p`
    margin-bottom: 57px;  
    color: #212C4F;
    font-family: Public Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.307px;
    @media screen and (max-width: 768px) {
		
        font-size: 16px;   
	}
`;

// export const tableWrapper = styled.div`


// `;