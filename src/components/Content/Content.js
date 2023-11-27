import React from 'react';
import { Container, Heading } from '../../globalStyles';
import { ImageWrapper, TopLine, Subtitle, TextWrapper, ContentSection } from './ContentStyles';
// import mask from 'C:/Users/janin/projeto-trads/src/assets/mask.png';

const Content = () => {
    return (
        <ContentSection id="corretor">
            
            <Container>
                <TextWrapper>
                    <TopLine>Meu Consultor</TopLine>
                    <Heading>Sobre o consultor que está te atendendo</Heading>
                    <Subtitle>
                        Quis egestas scelerisque fringilla eget felis, morbi neque erat. Pulvinar dui vitae amet, amet et, aliquet. Hac sed nunc arcu eget viverra lacus nunc. Suspendisse volutpat interdum et ullamcorper purus lectus. Cum ultricies euismod elementum, pellentesque eget massa duis. Nunc maecenas non et volutpat, sed mi ultricies.
                        <br/><br/>
                        Enim, fringilla molestie nam risus tempor egestas at et. Morbi vel aliquet ut sit amet cursus. Purus iaculis tincidunt iaculis nisl suspendisse. Porttitor elementum magna viverra volutpat, egestas nulla sagittis aliquam. Dolor arcu eget leo morbi nunc. Quis egestas magna sit ut blandit vel, sed aliquet.
                    </Subtitle>
                </TextWrapper>

                {/* <ImageWrapper>  <img src={mask} alt="Descrição da imagem" /> </ImageWrapper> */}
              
                
            </Container>
        </ContentSection>
    );
};

export default Content;