import React, { useState } from 'react';
import { Container } from '../../globalStyles';
import { TopLine, Subtitle, TextWrapper, Heading, tableWrapper, buttonWrapper } from './ListStyles';
import { ListSection } from './ListStyles';
import { MdArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";


const List = () => {
    const [openIcon, setOpenIcon] = useState(true)

    const toggleIcon = () => {
        console.log('chegou aqui')
        setOpenIcon(!openIcon);
    };





    return (

        <ListSection id="minha_cotacao">
            <Container>
                <TextWrapper>
                    <TopLine>resultado</TopLine>
                    <Heading>Sua Cotação</Heading>
                    <Subtitle>Clique nos títulos para expandir as informações.</Subtitle>
                </TextWrapper>

                <div className='tableWrapper'>
                    <div className='buttonWrapper'>
                        <button onClick={() => toggleIcon()}>{openIcon ? <MdArrowDropDown /> : <MdOutlineArrowDropUp />}</button>
                    </div>
                    <caption>Proposta Comercial</caption>
                    <table id='tabela1' className={openIcon ? "tableOpen" : "tableClose"}>


                        
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
                                <th className='table2'>Coparticipação</th>
                                <th className='table2'>Tipo de adesão</th>
                                <th className='table2'>Mais de um titular</th>
                                <th className='table2'>Corretor</th>
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
                </div>

            </Container>



        </ListSection>

    );
};

export default List;