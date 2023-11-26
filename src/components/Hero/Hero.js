import React from 'react';
import { Container, MainHeading } from '../../globalStyles';
import { StyledSVG1, StyledSVG2, StyledSVG3, StyledSVG4, HeroSection } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection id="inicio">
			<Container>
				<MainHeading>Somos a maior corretora de <br />plano de saúde da Paraíba</MainHeading>
				<StyledSVG1 xmlns="http://www.w3.org/2000/svg" width="347" height="386" viewBox="0 0 347 386" fill="none">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M-103.952 3.854C6.58266 16.7669 66.4 127.983 144.78 206.97C222.615 285.406 335.969 345.485 344.381 455.655C353.094 569.773 268.305 666.009 185.894 745.445C105.334 823.098 7.89743 884.345 -103.952 887.807C-219.051 891.369 -331.099 845.577 -412.315 763.958C-493.332 682.54 -532.833 570.497 -533.974 455.655C-535.127 339.572 -498.544 225.263 -418.501 141.166C-336.512 55.0248 -222.084 -9.94626 -103.952 3.854Z" stroke="#019BD7" stroke-opacity="0.4" stroke-width="4" />
				</StyledSVG1>

				<StyledSVG2 xmlns="http://www.w3.org/2000/svg" width="347" height="426" viewBox="0 0 347 426" fill="none">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M-100.888 3.84144C8.89268 16.6669 68.3017 127.13 146.147 205.582C223.45 283.487 336.031 343.158 344.385 452.582C353.039 565.928 268.828 661.513 186.98 740.411C106.969 817.538 10.1985 878.37 -100.888 881.808C-215.201 885.346 -326.484 839.864 -407.146 758.798C-487.609 677.931 -526.841 566.647 -527.974 452.582C-529.119 337.286 -492.786 223.751 -413.29 140.224C-331.86 54.6657 -218.213 -9.86536 -100.888 3.84144Z" stroke="#019BD7" stroke-width="4" />
				</StyledSVG2>

				<StyledSVG3 xmlns="http://www.w3.org/2000/svg" width="633" height="1179" viewBox="0 0 633 1179" fill="none">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M3.91057 623.796C15.8645 475.682 161.422 390.552 263.085 282.19C364.039 174.583 438.798 20.4558 585.415 3.97063C737.285 -13.1054 869.757 95.4418 979.696 201.616C1087.17 305.408 1173.55 432.501 1183.51 581.587C1193.76 735.003 1138 886.705 1032.96 998.977C928.183 1110.97 780.552 1169.03 627.354 1176.04C472.501 1183.12 318.213 1139.76 202.168 1036.97C83.3002 931.677 -8.86486 782.088 3.91057 623.796Z" stroke="#019BD7" stroke-width="4" />
				</StyledSVG3>

				<StyledSVG4 xmlns="http://www.w3.org/2000/svg" width="570" height="1188" viewBox="0 0 570 1188" fill="none">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M3.93624 628.259C15.9714 479.128 162.522 393.413 264.877 284.307C366.519 175.96 441.788 20.7736 589.404 4.17543C742.31 -13.0176 875.686 96.2758 986.374 203.18C1094.58 307.685 1181.55 435.652 1191.58 585.762C1201.9 740.233 1145.76 892.977 1040.01 1006.02C934.512 1118.79 785.874 1177.24 631.632 1184.3C475.723 1191.43 320.383 1147.77 203.546 1044.27C83.8678 938.257 -8.92598 787.639 3.93624 628.259Z" stroke="#019BD7" stroke-opacity="0.4" stroke-width="4" />
				</StyledSVG4>

			</Container>
		</HeroSection>

	);
};

export default Hero;