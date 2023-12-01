import React from 'react';
import { TextWrapper } from '../../components/Content/ContentStyles';
import { Cotacao, FooterSection, TopLine, Subtitle, Heading } from '../../components/Footer/FooterStyles';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";



const Footer = () => {
    return (
        <FooterSection padding="4rem 0 2rem 0">
            <TextWrapper>
                <TopLine>AVISO</TopLine>
                <Heading>Atenção</Heading>
                <Subtitle>
                    O valor apresentado é referente aos serviços conforme detalhados acima.
                    As Seguradora/Operadoras de planos de saúde, entre um mês e outro, podem mudar sem aviso previo,
                    suas condições de contratação para novas adesões aos serviços que comercializam. Por isso, todas
                    as condições apresentadas são válidas apenas até o dia 30 deste mês.
                </Subtitle>
            </TextWrapper>

            <Cotacao>
                <a href="#minha_cotacao">
                    <MdKeyboardDoubleArrowUp />
                    </a>
                    <span>Ver Cotação</span>
                
            </Cotacao>
        </FooterSection>

    );

};


export default Footer;