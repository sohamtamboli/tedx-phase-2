import React from "react";
import styled from "styled-components";
import MobileNav from "./images/MobileNav";
// import { NavLink as Link } from "react-router-dom";

const Nav = styled.nav`
	background: #fff;
	height: 5rem;
	margin-top: -5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	top: 0;
	font-size: 1rem;
	z-index: 3;
`;
const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 5rem;
	width: 100%;
	padding: 1rem 5rem;

	@media screen and (max-width: 600px) {
		padding: 1rem 2.2rem;
	}
`;
const NavLogo = styled.h1`
	font-size: 2rem;
	color: #000;
	font-weight: 900;
	cursor: pointer;
	& span {
		color: #ff0000;
	}
	@media screen and (max-width: 960px) {
		flex: 0.95;
	}
`;

const NavMenu = styled.ul`
	display: flex;
	list-style: none;
	align-items: center;

	@media screen and (max-width: 960px) {
		display: none;
	}
`;

const NavMenuItem = styled.a`
	display: flex;
	color: #000;
	text-decoration: none;
	padding: 0 2rem;
	cursor: pointer;
	height: 5rem;
	align-items: center;
	font-weight: 700;
	transition: all 0.125s ease-in;

	&:hover {
		color: #ff0000;
		border-bottom: 5px solid #ff0000;
	}

	&.active {
		border-bottom: 5px solid #ff0000;
	}
`;

const NavBtnWrapper = styled.div`
	align-items: center;
	border-radius: 2rem;
	background-color: #ff0000;
	padding: 0.6rem 1.5rem;
	cursor: pointer;
	transition: all 0.2s ease-in;
	color: #fff;
	&:hover {
		color: #000;
		border: 2px solid #ff0000;
		background-color: transparent;
	}
	&:hover a {
		color: #000;
	}
	@media screen and (max-width: 960px) {
		display: none;
	}
`;
const NavBtn = styled.a`
	text-decoration: none;
	color: #fff;
	font-weight: 700;
	border-radius: 2rem;
	&:hover {
		color: #000;
	}

	@media screen and (max-width: 960px) {
		display: none;
	}
`;

const MobileNavWrapper = styled.div`
	display: none;
	cursor: pointer;

	@media screen and (max-width: 960px) {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
`;

function Navbar({ toggle }) {
	return (
		<>
			<Nav>
				<NavContainer>
					<NavLogo>
						<span>
							TED<sup>x</sup>
						</span>
						JNEC
					</NavLogo>
					<MobileNavWrapper onClick={toggle}>
						<MobileNav />
					</MobileNavWrapper>
					<NavMenu>
						<NavMenuItem activeStyles>Home</NavMenuItem>
						<NavMenuItem activeStyles>About Tedx</NavMenuItem>
						<NavMenuItem activeStyles>Team</NavMenuItem>
					</NavMenu>
					<NavBtnWrapper>
						<NavBtn href='https://forms.gle/cfmdu92iHQeSyXBR6' target='_blank'>
							Join Us
						</NavBtn>
					</NavBtnWrapper>
				</NavContainer>
			</Nav>
		</>
	);
}

export default Navbar;
