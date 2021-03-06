import styled from "styled-components/macro";

export const Container = styled.div`
	background: ${(props) => props.theme.background};
	color: ${(props) => props.theme.text};
	width: 100vw;
	height: 100vh;
`;

export const Back = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
	width: 150px;
	height: 40px;
	border-radius: 8px;
	background: ${(props) => props.theme.elements};
	color: ${(props) => props.theme.text};
	margin-left: 10%;
	margin-top: 50px;
	margin-bottom: 50px;

	& p {
		margin-left: 20px;
		font-weight: 600;
	}

	&:hover {
		cursor: pointer;
	}
`;

export const Info = styled.div`
	background: ${(props) => props.theme.background};
	color: ${(props) => props.theme.text};
	padding: 0px 10%;
	display: flex;
	justify-content: space-between;

	& img {
		width: 600px;
		height: 400px;

		@media (max-width: 1440px) {
			width: 300px;
			height: 200px;
			margin-bottom: 20px;
		}
	}

	@media (max-width: 1440px) {
		flex-direction: column;
	}
`;

export const DetailsContainer = styled.div`
	width: 700px;

	& h2 {
		font-size: 2rem;
		margin: 0;
	}

	@media (max-width: 1440px) {
		width: 100%;
	}
`;

export const Details = styled.div`
	margin-top: 50px;
	display: flex;
	justify-content: space-between;
	margin-bottom: 50px;

	@media (max-width: 1440px) {
		flex-direction: column;
	}
`;

export const BordersContainer = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;

	@media (max-width: 1440px) {
		flex-direction: column;
		align-items: flex-start;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		column-gap: 1.8rem;
	}
`;

export const Border = styled.div`
	background-color: ${(props) => props.theme.elements};
	color: ${(props) => props.theme.text};
	width: 100px;
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid gray;
	margin-left: 20px;
	font-weight: 600;
	padding: 5px 10px;
	margin-bottom: 20px;

	&:hover {
		cursor: pointer;
	}
`;
