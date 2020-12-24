import React from "react";
import styled from "styled-components";

const DownAction = styled.svg`
	width: 48px;
	height: 48px;
	fill: #fff;
`;

function Down() {
	return (
		<DownAction xmlns='http://www.w3.org/2000/svg'>
			<path d='M12 15.586L7.707 11.293 6.293 12.707 12 18.414 17.707 12.707 16.293 11.293z'></path>
			<path d='M17.707 7.707L16.293 6.293 12 10.586 7.707 6.293 6.293 7.707 12 13.414z'></path>
		</DownAction>
	);
}

export default Down;
