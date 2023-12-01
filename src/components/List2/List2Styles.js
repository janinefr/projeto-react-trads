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
 

  .TableWrapper{
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
  
  
  th, td {
    padding: 12px 15px 12px 0;
    // padding-right: 12px; /* Adiciona espaçamento interno */
    // padding-top: 12px;

  }

  th{
    padding: 20px;
    width: 20%;
    color: #3A5ECF;
    text-align: left;
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
    width: 20%;
    margin-left: 100px;
    color: #212C4F;
    font-family: Public Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.307px;
  }

  ////////////

  .TableWrapper2{
    position: relative;
    margin-top: 50px;
  


    th{
    padding: 20px;
    color: #3A5ECF;
    text-align: center;
    font-family: Public Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 150% */
    letter-spacing: 0.173px;
    text-transform: uppercase;
    }

    td{
        width: 100px;
      padding: 30px;;
      border: none;
      color: #212C4F;
      font-family: Public Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
      letter-spacing: 0.307px;

    }
    .SVGCheck {
        color: #0FB820;
        font-size: 24px; 
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

  .backgroundBlue{
    border-radius: 4px;
    background: #ECEFFB;
    height: 65px;
}

.backgroundGrey{
    border-radius: 4px;
    background: #F7F7F7;
    height: 65px;
}


  `;