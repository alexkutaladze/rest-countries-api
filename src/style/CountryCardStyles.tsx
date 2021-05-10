import styled from "styled-components/macro";

export const Card = styled.div`
	width: 300px;
	background: ${(props) => props.theme.elements};
	box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.05);
	border-radius: 4px;
	padding-bottom: 10px;
	transition: transform 0.2s ease-in;

	&:hover {
		transform: scale(1.1);
		cursor: pointer;
	}
`;

export const Paragraph = styled.p`
	padding-left: 20px;
	margin-bottom: 5px;
`;

export const Title = styled.h2`
	padding-left: 20px;
	margin-bottom: 5px;
`;

export const Bold = styled.span`
	font-weight: 800;
`;

export const Image = styled.img`
	width: 300px;
	height: 200px;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
`;
