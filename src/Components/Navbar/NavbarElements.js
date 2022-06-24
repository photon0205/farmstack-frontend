import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #ffffff;
height: 60px;
display: flex;
justify-content: space-between;
// padding: 0.1rem calc((100vw - 1000px) / 2);
padding: 0px 60px;
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
color: #808080;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 2rem;
height: 100%;
cursor: pointer;
&.active {
    color: #3D4A52;
	border-bottom: 3px solid #c09507;
}
&:hover {
    text-decoration: none;
    color: #c09507;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
// margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
background: #ffffff;
padding: 5px 15px;
color: #c09507;
outline: none;
border: 2px solid #c09507;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	/*transition: all 0.2s ease-in-out;
	background: #fff;
    color: #808080;*/
    text-decoration: none;
    color: #c09507;
}
`;
