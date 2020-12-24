import React from "react";
import styled from "styled-components";
import CloseIcon from "./images/CloseIcon";

const SidebarContainer = styled.div`
	/* background-color: #191919; */
	background-color: #f1f1f1;
	position: fixed;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 10;
	transition: all 0.3s ease-in-out;
	opacity: ${({ open }) => (open ? "1" : "0")};
	bottom: ${({ open }) => (open ? "0" : "-100%")};
`;

const IconWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 2rem;
	margin-right: 1.5rem;
	cursor: pointer;

	@media screen and (max-width: 500) {
		margin-right: 1.2rem;
	}
`;

const ItemsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const SideMenu = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	justify-content: center;
	margin-bottom: 5rem;
`;

const SideMenuItem = styled.a`
	display: flex;
	color: #000;
	text-decoration: none;
	padding: 2rem 0;
	cursor: pointer;
	height: 2rem;
	justify-content: center;

	font-weight: 700;
	transition: all 0.125s ease-in;

	&:hover {
		color: #ff0000;
		border-left: 3px solid #ff0000;
	}

	&.active {
		border-bottom: 3px solid #ff0000;
	}
`;

const SideBtnWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem;
	width: 30%;
	padding: 0.6rem 1.5rem;
	border-radius: 2rem;
	background-color: #ff0000;
	align-self: center;
	text-align: center;
	transition: all 0.2s ease-in;
	cursor: pointer;
	color: #fff;
	&:hover {
		color: #000;
		border: 2px solid #ff0000;
		background-color: transparent;
	}
	&:hover a {
		color: #000;
	}
`;

const SideBtn = styled.a`
	text-decoration: none;
	color: #fff;
	font-weight: 700;
	transition: all 0.2s ease-in;
	justify-content: center;
	&:hover {
		color: #000;
	}
`;

function Sidebar({ open, toggle }) {
	return (
		<>
			<SidebarContainer open={open}>
				<IconWrapper onClick={toggle}>
					<CloseIcon />
				</IconWrapper>
				<ItemsContainer>
					<SideMenu>
						<SideMenuItem onClick={toggle} activeStyles>
							Home
						</SideMenuItem>
						<SideMenuItem onClick={toggle} activeStyles>
							About Tedx
						</SideMenuItem>
						<SideMenuItem onClick={toggle} activeStyles>
							Team
						</SideMenuItem>
					</SideMenu>
					<SideBtnWrapper>
						<SideBtn href='https://forms.gle/cfmdu92iHQeSyXBR6' target='_blank'>
							Join Us
						</SideBtn>
					</SideBtnWrapper>
				</ItemsContainer>
			</SidebarContainer>
		</>
	);
}

export default Sidebar;
