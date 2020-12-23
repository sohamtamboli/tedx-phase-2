import React from "react";
import styled from "styled-components";

const MobileNavIcon = styled.svg`
	width: 32px;
	height: 32px;
	fill: #fff;
`;

function MobileNav() {
	return (
		<MobileNavIcon xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
			<path d='M4 6H20V8H4zM8 11H20V13H8zM13 16H20V18H13z'></path>
		</MobileNavIcon>
	);
}

export default MobileNav;
