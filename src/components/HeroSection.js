import React from "react";
import styled from "styled-components";
import img from "./images/herobg.png";

const HeroMainContainer = styled.main`
	min-height: 100vh;
	width: 100%;
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(${img});

	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	z-index: 2;
`;

function HeroSection() {
	return (
		<HeroMainContainer>
			{/* <HeroContentWrapper>
				<HeroTextWrapper>
					<HeroTopLine>TEDxJNEC 2K21 Theme</HeroTopLine>
					<HeroHeading>KINTSUGI</HeroHeading>
					<HeroSubheading>Finding Strength in Imperfection</HeroSubheading>
				</HeroTextWrapper>
			</HeroContentWrapper> */}
		</HeroMainContainer>
	);
}

export default HeroSection;
