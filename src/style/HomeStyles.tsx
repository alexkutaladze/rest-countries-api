import styled from "styled-components/macro";

export const SearchContainer = styled.div`
	padding-top: 50px;
	padding-left: 10%;
	padding-right: 10%;
	background: ${props => props.theme.background};
	color: ${props => props.theme.text};
	display: flex;
	justify-content: space-between;

	@media (max-width: 1440px) {
		flex-direction: column;
	}
`;

export const InputContainer = styled.div`
	background-color: ${props => props.theme.elements};
	box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.05);
	width: 20%;
	padding: 15px 25px;
	display: flex;
	align-items: center;
	border-radius: 4px;

	@media (max-width: 1440px) {
		width: auto;
		margin-bottom: 20px;
	}
`;

export const Input = styled.input`
	border: none;
	background: ${props => props.theme.elements};
	color: ${props => props.theme.text};
	font-weight: 600;
	width: 90%;
	margin-left: 10px;
	${props => props.theme.text};

	&:focus {
		outline: none;
	}
`;

export const Dropdown = styled.select`
	padding: 15px 25px;
	box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.05);
	border: none;
	border-radius: 4px;
	font-weight: 600;

	&:focus {
		outline: none;
	}

	@media (max-width: 1440px) {
		width: 60%;
	}
`;

export const List = styled.div`
	padding: 50px 10%;
	background: ${props => props.theme.background};
	color: ${props => props.theme.text};
	display: grid;
	column-gap: 6.55rem;
	row-gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	place-items: center;
	min-height: 61.8vh;
`;
