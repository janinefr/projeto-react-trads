import React from 'react';
import { Container, MainHeading } from '../../globalStyles';
import {StyledDiv, HeroSection} from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<Container>
				<MainHeading>Somos a maior corretora de plano de saúde da Paraíba</MainHeading>
				<StyledDiv>
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h2v2h-2v-2zm1-14c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7z" />
      </svg>
    </StyledDiv>
            </Container>
		</HeroSection>

	);
};

export default Hero;