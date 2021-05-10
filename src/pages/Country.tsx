import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useHistory, useLocation } from "react-router-dom";
import HeaderComponent from "../components/Header";
import { Bold } from "../style/CountryCardStyles";
import {
	Back,
	Border,
	BordersContainer,
	Container,
	Details,
	DetailsContainer,
	Info,
} from "../style/CountryInfoStyles";

const populationFormat = new Intl.NumberFormat("en-US");

const Country = () => {
	const location: any = useLocation();
	const history = useHistory();
	const [borders, setBorders] = useState<any[]>([]);

	useEffect(() => {
		setBorders([]);
		location.state.borders.forEach((item: any) => {
			fetch(`https://restcountries.eu/rest/v2/alpha/${item}`)
				.then((res) => res.json())
				.then((data) => {
					setBorders((prev) => [...prev, data]);
					console.log("data", data);
				});
		});
	}, [location]);

	const displayBorders = () => {
		return borders.length > 0
			? borders.map((item) => <BorderButton data={item} />)
			: " 0";
	};

	return (
		<Container>
			<HeaderComponent />
			<Back onClick={() => history.goBack()}>
				<BiArrowBack />
				<p>Back</p>
			</Back>
			<Info>
				<img src={location.state.flag} alt="flag" />
				<DetailsContainer className="country-details">
					<h2>{location.state.name}</h2>
					<Details>
						<div>
							<p>
								<Bold className="bold-attr">Native Name: </Bold>
								{location.state.nativeName}
							</p>
							<p>
								<Bold className="bold-attr">Population: </Bold>
								{populationFormat.format(
									location.state.population
								)}
							</p>
							<p>
								<Bold className="bold-attr">Region: </Bold>
								{location.state.region}
							</p>
							<p>
								<Bold className="bold-attr">Sub Region: </Bold>
								{location.state.subregion}
							</p>
							<p>
								<Bold className="bold-attr">Capital: </Bold>
								{location.state.capital}
							</p>
						</div>
						<div>
							<p>
								<Bold className="bold-attr">
									Top Level Domain:{" "}
								</Bold>
								{location.state.topLevelDomain}
							</p>
							<p>
								<Bold className="bold-attr">Currencies: </Bold>
								{location.state.currencies[0].name}
							</p>
							<p>
								<Bold className="bold-attr">Languages: </Bold>
								{location.state.languages[0].name}
							</p>
						</div>
					</Details>
					<BordersContainer className="border-container">
						<Bold>Border Countries: </Bold>
						{displayBorders()}
					</BordersContainer>
				</DetailsContainer>
			</Info>
		</Container>
	);
};

const BorderButton: React.FC<{ data: any }> = ({ data }) => {
	const history = useHistory();
	return (
		<Border
			onClick={() => history.push(`/country/${data.name}`, { ...data })}
		>
			{data.name}
		</Border>
	);
};

export default Country;
