import React from "react";
import styled from "styled-components";
import MobileNav from "./images/MobileNav";
// import { NavLink as Link } from "react-router-dom";

const Nav = styled.nav`
	background-color: #212121;
	height: 5rem;
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
	color: #fff;
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
	color: #fff;
	text-decoration: none;
	padding: 0 2rem;
	cursor: pointer;
	height: 5rem;
	align-items: center;
	font-weight: bold;
	transition: all 0.125s ease-in;

	&:hover {
		color: #ff0000;
		border-bottom: 3px solid #ff0000;
	}

	&.active {
		border-bottom: 3px solid #ff0000;
	}
`;

const NavBtnWrapper = styled.div`
	align-items: center;
`;

const NavBtn = styled.a`
	color: #fff;
	text-decoration: none;
	padding: 0.6rem 1.5rem;
	cursor: pointer;
	font-weight: bold;
	border-radius: 2rem;
	background-color: #ff0000;
	transition: all 0.2s ease-in;

	&:hover {
		border: 2px solid #ff0000;
		background-color: transparent;
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
						<NavBtn>Join Us</NavBtn>
					</NavBtnWrapper>
				</NavContainer>
			</Nav>
		</>
	);
}

export default Navbar;
