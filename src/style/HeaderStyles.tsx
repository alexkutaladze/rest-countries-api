import styled from "styled-components/macro";

export const Header = styled.header`
	box-shadow: 2px 2px rgba(0, 0, 0, 0.05);
	display: flex;
	align-items: center;
	padding-left: 10%;
	padding-right: 10%;
	justify-content: space-between;
	background: ${(props) => props.theme.background};
	color: ${(props) => props.theme.text};
`;

export const Heading = styled.h1`
	font-weight: 800;
	font-size: 1.6rem;

	&:hover {
		cursor: pointer;
	}
`;

export const ThemeSwitcher = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const Paragraph = styled.p`
	font-weight: 600;
	padding-left: 10px;
	font-size: 1.2rem;
`;
