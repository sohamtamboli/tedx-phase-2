import React from "react";
import styled from "styled-components";

const InfoSecContainer = styled.section`
	background-color: #fff;
`;

const Container = styled.div`
	max-width: 1300px;
	width: 100%;
	padding-left: 3rem;
	padding-right: 3rem;
	margin-left: 0;
	margin-right: 0;
	z-index: 1;

	@media screen and (max-width: 960px) {
		padding-left: 2rem;
		padding-right: 2rem;
	}
`;

const InfoRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

const InfoColumn = styled.div`
	flex: 1;
	max-width: 50%;
	flex-basis: 50%;

	@media screen and (max-width: 960px) {
		display: flex;
		max-width: 100%;
		flex-basis: 100%;
		justify-content: center;
	}
`;
const InfoTextWrapper = styled.div`
	max-width: 600px;
	padding: 3rem 0;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const InfoHeading = styled.h2`
	font-weight: 900;
	text-align: ${({ imgStart }) => (imgStart ? "left" : "right")};

	@media screen and (max-width: 960px) {
		text-align: left;
	}
`;

const InfoPara = styled.p`
	font-weight: 500;
	text-align: ${({ imgStart }) => (imgStart ? "left" : "right")};

	@media screen and (max-width: 960px) {
		text-align: left;
	}
`;

const ImgWrapper = styled.div`
	max-width: 600px;
	display: flex;
	gap: 2rem;
	justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

const Img = styled.img`
	border: 0;
	max-width: 100%;
	padding: 3rem;
	display: flex;
	align-items: center;
	max-height: 600px;
`;

function InfoSection({ imgStart, headline, para, start, img }) {
	return (
		<InfoSecContainer>
			<Container>
				<InfoRow imgStart={imgStart}>
					<InfoColumn>
						<InfoTextWrapper>
							<InfoHeading imgStart={imgStart}>{headline}</InfoHeading>
							<InfoPara imgStart={imgStart}>{para}</InfoPara>
						</InfoTextWrapper>
					</InfoColumn>
					<InfoColumn>
						<ImgWrapper start={start}>
							<Img src={img} />
						</ImgWrapper>
					</InfoColumn>
				</InfoRow>
			</Container>
		</InfoSecContainer>
	);
}

export default InfoSection;
