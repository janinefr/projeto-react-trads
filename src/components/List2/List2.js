import React, { useState } from 'react';
import { Container } from '../../globalStyles';
import { ListSection } from './List2Styles';
import { TopLine, Subtitle, TextWrapper, Heading } from '../List/ListStyles';
import { MdArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";

const List2 = () => {
    const [openIcon, setOpenIcon] = useState(true);
    const [openIcon2, setOpenIcon2] = useState(false);


    const toggleIcon = () => {
        console.log('chegou aqui')
        setOpenIcon(!openIcon);
    };

    const toggleIcon2 = () => {
        console.log('chegou aqui')
        setOpenIcon2(!openIcon2);
    };


    return (

        <ListSection id="rede_referenciada">
            <Container>
                <TextWrapper>
                    <TopLine>Rede</TopLine>
                    <Heading>Referenciada</Heading>
                    <Subtitle>Clique nos títulos para expandir as informações.</Subtitle>
                </TextWrapper>

                <div className='TableWrapper'>
                    <div className='buttonWrapper'>
                        <button onClick={() => toggleIcon()}>{openIcon ? <MdArrowDropDown /> : <MdOutlineArrowDropUp />}</button>
                    </div>
                    <caption>CNU</caption>
                    <table id='tabela1' className={openIcon ? "tableOpen" : "tableClose"}>



                        <thead className='backgroundBlue'>
                            <tr>
                                <th>cidade</th>
                                <th>hospitais</th>
                                <th>estilo</th>
                                <th>absoluto</th>
                                <th>superior</th>
                                <th>exclusivo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td rowSpan={4} style={{ textAlign: 'center', verticalAlign: 'middle', borderRadius: '4px', background: '#F7F7F7', height: '312px' }}>Salvador</td>
                                <td>Clin. Bom Viver</td>
                                <td>PS</td>
                                <td>PS</td>
                                <td>PS</td>
                                <td>PS</td>
                            </tr>
                            <tr className='backgroundGrey'>
                                <td>Clin. de Urologia Modesto Jacobino</td>
                                <td>-</td>
                                <td>PS</td>
                                <td>PS</td>
                                <td>PS</td>
                            </tr>
                            <tr>
                                <td>Cot</td>
                                <td>PS</td>
                                <td>PS</td>
                                <td>PS</td>
                                <td>PS</td>
                            </tr>
                            <tr className='backgroundGrey'>
                                <td>Day Hosp. Louis Pasteur</td>
                                <td>-</td>
                                <td>PS</td>
                                <td>PS</td>
                                <td>PS</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='TableWrapper2'>
                    <div className='buttonWrapper'>
                        <button onClick={() => toggleIcon2()}>{openIcon2 ? <MdArrowDropDown /> : <MdOutlineArrowDropUp />}</button>
                    </div>
                    <caption>Sulamérica</caption>
                    <table id='tabela2' className={openIcon2 ? "tableOpen" : "tableClose"}>


                        <thead className='backgroundBlue'>
                            <tr>
                                <th>município</th>
                                <th>prestador</th>
                                <th>tipo de atendimento</th>
                                <th>Exato Enfermaria</th>
                                <th>exato Apartamento</th>
                                <th>clássico Enfermaria</th>
                                <th>clássico Apartamento</th>
                                <th>especial 100 Apartamento</th>
                                <th>executivo Apartamento</th>
                                <th>prestigio Apartamento</th>
                            </tr>
                        </thead>


                        <tbody>
                            <tr >
                                <td rowSpan={5} style={{ textAlign: 'center', verticalAlign: 'middle', borderRadius: '4px', background: '#F7F7F7', height: '312px' }}>Salvador</td>
                                <td>Espaço Bom Viver</td>
                                <td>H - PS</td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                            </tr>

                            <tr className='backgroundGrey'>
                                <td>Itaigara Memorial Hospital Dia H</td>
                                <td>H</td>
                                <td></td>
                                <td></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>Otorrino Center Sc Ltda H</td>
                                <td>H</td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                            </tr>

                            <tr className='backgroundGrey'>
                                <td>Hospital da Cidade</td>
                                <td>H - PS</td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>Self Ondina</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                                <td><BsCheckLg className='SVGCheck' /></td>
                            </tr>

                        </tbody>
                    </table>
                </div>



            </Container>



        </ListSection>

    );
};

export default List2;