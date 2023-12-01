import React, { useState } from 'react';
import { Container } from '../../globalStyles';
import { TopLine, Subtitle, TextWrapper, Heading, tableWrapper, buttonWrapper } from './ListStyles';
import { ListSection } from './ListStyles';
import { MdArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";


const List = () => {
    const [openIcon, setOpenIcon] = useState(true);
    const [openIcon2, setOpenIcon2] = useState(true);
    const [openIcon3, setOpenIcon3] = useState(true);
    const [openIcon4, setOpenIcon4] = useState(true);
    const [openIcon5, setOpenIcon5] = useState(true);

    const toggleIcon = () => {
        console.log('chegou aqui')
        setOpenIcon(!openIcon);
    };

    const toggleIcon2 = () => {
        console.log('chegou aqui')
        setOpenIcon2(!openIcon2);
    };

    const toggleIcon3 = () => {
        console.log('chegou aqui')
        setOpenIcon3(!openIcon3);
    };

    const toggleIcon4 = () => {
        console.log('chegou aqui')
        setOpenIcon4(!openIcon4);
    };

    const toggleIcon5 = () => {
        console.log('chegou aqui')
        setOpenIcon5(!openIcon5);
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

                <div className='tableWrapper2'>
                    <div className='buttonWrapper'>
                        <button onClick={() => toggleIcon2()}>{openIcon2 ? <MdArrowDropDown /> : <MdOutlineArrowDropUp />}</button>
                    </div>
                    <caption>Rede Hospitalar - Qualicorp</caption>
                    <table id='tabela2' className={openIcon2 ? "tableOpen" : "tableClose"}>


                        <thead className='backgroundBlue'>
                            <tr>
                                <th>SÃO PAULO (SP)</th>
                                <th>RECIFE (PE)</th>
                                <th>JOÃO PESSOA (PB)</th>
                                <th>MANAUS (AM)</th>
                            </tr>
                        </thead>


                        <tbody>
                            <tr>
                                <td>XXX</td>
                                <td>Hospital Albert Sabin</td>
                                <td>Hospital CLIM</td>
                                <td>XXX</td>
                            </tr>
                        </tbody>
                        <tbody className='backgroundGrey'>
                            <tr>
                                <td></td>
                                <td>Hospital Esperança</td>
                                <td>Hospital Provisão</td>
                                <td></td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Hospital São Luiz da Paraíba</td>
                                <td></td>
                            </tr>
                        </tbody>

                    </table>
                </div>

                <div className='tableWrapper3'>
                    <div className='buttonWrapper'>
                        <button onClick={() => toggleIcon3()}>{openIcon3 ? <MdArrowDropDown /> : <MdOutlineArrowDropUp />}</button>
                    </div>
                    <caption>Diferenciais</caption>
                    <table id='tabela3' className={openIcon3 ? "tableOpen" : "tableClose"}>


                        <thead className='backgroundBlue'>
                            <tr>
                                <th>cobertura</th>
                                <th>unimed</th>
                                <th>qualicorp</th>
                            </tr>
                        </thead>


                        <tbody>
                            <tr>
                                <td>Remissão</td>
                                <td className="redText">Não</td>
                                <td className="greenText">Sim</td>
                            </tr>
                        </tbody>
                        <tbody className='backgroundGrey'>
                            <tr>
                                <td>Autorização</td>
                                <td className="greenText">Sim</td>
                                <td className="redText">Não</td>

                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <td>Reembolso</td>
                                <td className="greenText">Sim</td>
                                <td className="greenText">Sim</td>
                            </tr>
                        </tbody>

                        <tbody className='backgroundGrey'>
                            <tr >
                                <td>Nacional</td>
                                <td className="greenText">Sim</td>
                                <td className="greenText">Sim</td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <td>Telemedicina</td>
                                <td className="greenText">Sim</td>
                                <td className="greenText">Sim</td>

                            </tr>
                        </tbody>

                    </table>
                </div>

                <div className='tableWrapper3'>
                    <div className='buttonWrapper'>
                        <button onClick={() => toggleIcon4()}>{openIcon4 ? <MdArrowDropDown /> : <MdOutlineArrowDropUp />}</button>
                    </div>
                    <caption>Qualicorp - Bradesco</caption>
                    <table id='tabela3' className={openIcon4 ? "tableOpen" : "tableClose"}>


                        <thead className='backgroundBlue'>
                            <tr>
                                <th>n de vidas</th>
                                <th>faixa etária</th>
                                <th>enfermaria</th>
                                <th>apto</th>
                            </tr>
                        </thead>


                        <tbody>
                            <tr>
                                <td></td>
                                <td> apto</td>
                                <td>R$ 293,80</td>
                                <td>R$ 326,45</td>
                            </tr>
                        </tbody>
                        <tbody className='backgroundGrey'>
                            <tr>
                                <td></td>
                                <td>19 – 23</td>
                                <td>R$ 365,52</td>
                                <td>R$ 406,13</td>

                            </tr>
                        </tbody>

                    </table>
                </div>

                <div className='tableWrapper3'>
                    <div className='buttonWrapper'>
                        <button onClick={() => toggleIcon5()}>{openIcon5 ? <MdArrowDropDown /> : <MdOutlineArrowDropUp />}</button>
                    </div>
                    <caption>Prêmio Total</caption>
                    <table id='tabela3' className={openIcon5 ? "tableOpen" : "tableClose"}>


                        <thead >
                            <tr>
                                <th></th>
                                <th>vidas</th>
                                <th>saúde</th>
                                <th>saúde + dental</th>
                            </tr>
                        </thead>


                        <tbody className='backgroundLightBlue'>
                            <tr>
                                <td>total</td>
                                <td>1</td>
                                <td>R$ 1.285,65</td>
                                <td>R$ 1.309,3</td>
                            </tr>
                        </tbody>

                    </table>
                </div>


            </Container>



        </ListSection>

    );
};

export default List;