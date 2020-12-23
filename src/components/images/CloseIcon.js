import React from "react";
import styled from "styled-components";

const Close = styled.svg`
	width: 32px;
	height: 32px;
	fill: #fff;
`;

function CloseIcon() {
	return (
		<Close xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
			<path d='M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z'></path>
		</Close>
	);
}

export default CloseIcon;