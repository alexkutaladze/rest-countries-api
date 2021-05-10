import React from "react";
import { useHistory } from "react-router-dom";
import {
	Bold,
	Card,
	Image,
	Paragraph,
	Title,
} from "../style/CountryCardStyles";

const populationFormat = new Intl.NumberFormat("en-US");

interface CountryProps {
	data: any;
}

const CountryComponent: React.FC<CountryProps> = ({ data }) => {
	const history = useHistory();
	return (
		<Card
			className="country-container"
			onClick={() => history.push(`/country/${data.name}`, { ...data })}
		>
			<Image src={data.flag} alt={`{name}  flag`} />
			<Title>{data.name}</Title>
			<Paragraph>
				<Bold>Population: </Bold>{" "}
				{populationFormat.format(data.population!)}
			</Paragraph>
			<Paragraph>
				<Bold>Region: </Bold> {data.region}
			</Paragraph>
			<Paragraph>
				<Bold>Capital: </Bold>
				{data.capital}
			</Paragraph>
		</Card>
	);
};

export default CountryComponent;
