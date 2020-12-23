import React from "react";
import styled, { keyframes } from "styled-components";
import img from "./images/herobg.png";

const HeroMainContainer = styled.main`
	min-height: 100vh;
	width: 100%;
	background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
		url(${img});

	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	z-index: 2;
`;

const HeroContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
	gap: 2rem;
`;

const HeroTextWrapper = styled.div`
	display: flex;
	flex: 0.85;
	justify-content: center;
	flex-direction: column;
	color: #fff;
	font-size: 30px; //Important

	@media screen and (max-width: 960px) {
		font-size: 22px;
	}
	@media screen and (max-width: 666px) {
		font-size: 18px;
	}
	@media screen and (max-width: 480px) {
		font-size: 12px;
	}
`;

const HeroTopLine = styled.h5`
	justify-content: flex-start;
	text-align: left;
	font-weight: 300;
	font-size: 0.5em;
	& span {
		color: #ff0000;
		font-weight: 900;
	}
	@media screen and (max-width: 666px) {
		font-size: 0.6em;
	}
	@media screen and (max-width: 480px) {
		font-size: 0.8em;
	}
`;
const HeroHeading = styled.h1`
	justify-content: center;
	text-align: left;
	font-weight: 900;
	font-size: 5em;
	letter-spacing: 5px;
`;

const HeroSubheading = styled.h3`
	justify-content: right;
	text-align: right;
	font-weight: 500;
	letter-spacing: 1.2px;
	font-size: 0.8em;
	& span {
		color: #ff0000;
		font-weight: 900;
	}
`;

const slideDown = keyframes`
  0% {
    transform: translate(-50%, 0);
    opacity: 1;
  }

  100% {
    transform: translate(-50%, 25px);
    opacity: 0;
  }
`;

const HeroActionBtnWrapper = styled.div`
	text-decoration: none;
	border: 2px solid #fff;
	border-radius: 20px;
	position: relative;
	width: 1.3rem;
	height: 3rem;
	pointer-events: none;

	:before {
		content: "";
		position: absolute;
		height: 4px;
		width: 4px;
		background-color: #fff;
		border-radius: 50%;
		left: 50%;
		top: 10px;
		transform: translate(-50%, 0);
		animation: ${slideDown} 1s linear infinite;
	}
`;

function HeroSection() {
	return (
		<HeroMainContainer>
			<HeroContentWrapper>
				<HeroTextWrapper>
					<HeroTopLine>
						<span>
							TED<sup>x</sup>
						</span>
						JNEC 2K21 Theme:
					</HeroTopLine>
					<HeroHeading>KINTSUGI</HeroHeading>
					<HeroSubheading>
						Finding Strength in <span> Imperfection </span>{" "}
					</HeroSubheading>
				</HeroTextWrapper>
				<HeroActionBtnWrapper></HeroActionBtnWrapper>
			</HeroContentWrapper>
		</HeroMainContainer>
	);
}

export default HeroSection;
