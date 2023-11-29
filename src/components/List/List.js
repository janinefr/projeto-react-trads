import React from 'react';
import { Container } from '../../globalStyles';
import { TopLine, Subtitle, TextWrapper, Heading } from './ListStyles';
import { ListSection } from './ListStyles';
import { MdArrowDropDown } from "react-icons/md";

const List = () => {
    return (
        <ListSection id="minha_cotacao">
            <Container>
                <TextWrapper>
                    <TopLine>resultado</TopLine>
                    <Heading>Sua Cotação</Heading>
                    <Subtitle>Clique nos títulos para expandir as informações.</Subtitle>
                </TextWrapper>

                <button><MdArrowDropDown /></button>
                <table id='tabela1'>
                    <caption>Proposta Comercial</caption>
                    <thead>
                        <tr>
                            <th>Empresa</th>
                            <th>Plano</th>
                            <th>Acomodação</th>
                            <th>Rede</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>Industria de Laticinios Nova Aliança LTDA</td>
                            <td>Top Nacional</td>
                            <td>Enfermaria</td>
                            <td>Nacional</td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>Coparticipação</th>
                            <th>Tipo de adesão</th>
                            <th>Mais de um titular</th>
                            <th>Corretor</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>Não</td>
                            <td>Compulsoria</td>
                            <td>Sim</td>
                            <td>xxxx</td>
                        </tr>
                    </tbody>

                </table>
            </Container>


        </ListSection>

    );
};

export default List;