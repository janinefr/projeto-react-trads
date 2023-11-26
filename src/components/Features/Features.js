import React from 'react';
import { Container } from '../../globalStyles';
import {StyledImg, StyledSVGpdf, StyledCircleSVG, StyledLogosContainer, StyledLogos, FeaturesSection } from './FeaturesStyles';
import logos from 'C:/Users/janin/projeto-trads/src/assets/logos.png';
import image from 'C:/Users/janin/projeto-trads/src/assets/imgpen.jpg';

const Features = () => {
    return (
        <FeaturesSection id="sobre_nos">
            <Container>
                <StyledLogosContainer>
                    <StyledLogos src={logos} alt="Logo" />
                </StyledLogosContainer>
                <StyledCircleSVG xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="40" fill="#CF6A4E" />
                </StyledCircleSVG>
                <StyledSVGpdf xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20.15 20.9499H19.375V26.7687H20.1313C20.2264 26.7703 20.3207 26.7516 20.408 26.7139C20.4953 26.6762 20.5735 26.6203 20.6375 26.5499C20.7035 26.4833 20.7557 26.4042 20.7911 26.3174C20.8265 26.2305 20.8444 26.1375 20.8438 26.0437V21.6687C20.8451 21.5733 20.827 21.4786 20.7905 21.3905C20.7539 21.3023 20.6997 21.2226 20.6313 21.1562C20.5686 21.0917 20.4939 21.0404 20.4113 21.005C20.3287 20.9696 20.2399 20.9509 20.15 20.9499ZM15.7 23.4124C15.7682 23.3458 15.8222 23.266 15.8587 23.1779C15.8952 23.0898 15.9135 22.9953 15.9125 22.8999V21.6499C15.917 21.5539 15.9021 21.458 15.8688 21.3678C15.8356 21.2776 15.7845 21.195 15.7188 21.1249C15.6498 21.0571 15.5676 21.0044 15.4772 20.9699C15.3869 20.9355 15.2904 20.9202 15.1938 20.9249H14.4313V23.6249H15.1875C15.283 23.627 15.3779 23.6092 15.4662 23.5727C15.5544 23.5361 15.634 23.4815 15.7 23.4124Z" fill="white" />
                    <path d="M34.375 16.875H33.75V9.375C33.75 9.375 33.75 9.375 33.75 9.3375C33.7468 9.28219 33.7363 9.22754 33.7188 9.175V9.11875C33.69 9.05188 33.6498 8.99054 33.6 8.9375L26.1 1.4375C26.047 1.38767 25.9856 1.34748 25.9188 1.31875H25.8625C25.8002 1.28464 25.7326 1.26139 25.6625 1.25H6.875C6.70924 1.25 6.55027 1.31585 6.43306 1.43306C6.31585 1.55027 6.25 1.70924 6.25 1.875V16.875H5.625C5.45924 16.875 5.30027 16.9408 5.18306 17.0581C5.06585 17.1753 5 17.3342 5 17.5V30C5 30.1658 5.06585 30.3247 5.18306 30.4419C5.30027 30.5592 5.45924 30.625 5.625 30.625H6.25V38.125C6.25 38.2908 6.31585 38.4497 6.43306 38.5669C6.55027 38.6842 6.70924 38.75 6.875 38.75H33.125C33.2908 38.75 33.4497 38.6842 33.5669 38.5669C33.6842 38.4497 33.75 38.2908 33.75 38.125V30.625H34.375C34.5408 30.625 34.6997 30.5592 34.8169 30.4419C34.9342 30.3247 35 30.1658 35 30V17.5C35 17.3342 34.9342 17.1753 34.8169 17.0581C34.6997 16.9408 34.5408 16.875 34.375 16.875ZM26.25 3.38125L31.6187 8.75H26.25V3.38125ZM32.5 37.5H7.5V30.625H32.5V37.5ZM13.1687 28.0125V19.6687H15.15C15.421 19.6567 15.6915 19.7023 15.9436 19.8025C16.1957 19.9027 16.4237 20.0552 16.6125 20.25C16.957 20.638 17.1384 21.144 17.1187 21.6625V22.875C17.1231 23.137 17.0744 23.3973 16.9756 23.64C16.8767 23.8827 16.7299 24.103 16.5437 24.2875C16.365 24.4768 16.1487 24.6269 15.9087 24.728C15.6688 24.8292 15.4104 24.8792 15.15 24.875H14.4312V28L13.1687 28.0125ZM18.1313 28.0125V19.6625H20.1062C20.3677 19.6574 20.6273 19.707 20.8684 19.8082C21.1095 19.9094 21.3268 20.0599 21.5063 20.25C21.6922 20.4333 21.839 20.6525 21.9378 20.8942C22.0367 21.1359 22.0855 21.3952 22.0813 21.6562V26.0312C22.0851 26.2938 22.0356 26.5544 21.9357 26.7972C21.8358 27.04 21.6875 27.26 21.5 27.4438C21.3205 27.6339 21.1032 27.7844 20.8621 27.8855C20.621 27.9867 20.3614 28.0364 20.1 28.0312L18.1313 28.0125ZM26.15 23.2063V24.4563H24.45V28H23.2V19.6625H26.7812V20.9125H24.45V23.1875L26.15 23.2063ZM32.5 16.875H7.5V2.5H25V9.375C25 9.54076 25.0658 9.69973 25.1831 9.81694C25.3003 9.93415 25.4592 10 25.625 10H32.5V16.875Z" fill="white" />
                </StyledSVGpdf>

                
                    <h3>Sobre nós</h3>
                    <h1>Sit nisl aliquet dictumst amet velit augue mi, vel. Non mattis pretium ipsum duis facilisis at.</h1>

                    <div id="paragraph">
                        <p id="p1">Quis egestas scelerisque fringilla eget felis, morbi neque erat. Pulvinar dui vitae amet, amet et, aliquet. Hac sed nunc arcu eget viverra lacus nunc. Suspendisse volutpat interdum et ullamcorper purus lectus. Cum ultricies euismod elementum, pellentesque eget massa duis. Nunc maecenas non et volutpat, sed mi ultricies.<br />
                        </p>
                        <p id="p2">Enim, fringilla molestie nam risus tempor egestas at et. Morbi vel aliquet ut sit amet cursus. Purus iaculis tincidunt iaculis nisl suspendisse. Porttitor elementum magna viverra volutpat, egestas nulla sagittis aliquam. Dolor arcu eget leo morbi nunc. Quis egestas magna sit ut blandit vel, sed aliquet.
                        </p>
                    </div>

                    <div id="numbers">
                        <p id="p_number"><span className="styled">+10</span><br />Anos no mercado</p>
                        <p id="p_number"><span className="styled">+300</span><br /> Clientes satisfeitos</p>
                        <p id="p_number"><span className="styled">+1000</span><br /> Transações</p>

                    </div>

                    <div>
                        {/* Sua imagem ocupando 50% do conteúdo */}
                        <StyledImg src={image} alt="Descrição da imagem" />
                    </div>






            </Container>

        </FeaturesSection>

    );
};

export default Features;