import React from "react";
import { useHistory } from "react-router-dom";

const populationFormat = new Intl.NumberFormat("en-US");

interface CountryProps {
	data: any;
}

const CountryComponent: React.FC<CountryProps> = ({ data }) => {
	const history = useHistory();
	return (
		<div
			className="country-container"
			onClick={() => history.push(`/country/${data.name}`, { ...data })}
		>
			<img src={data.flag} alt={`{name}  flag`} />
			<h2>{data.name}</h2>
			<p>
				<span className="bold-attr">Population: </span>{" "}
				{populationFormat.format(data.population!)}
			</p>
			<p>
				<span className="bold-attr">Region: </span> {data.region}
			</p>
			<p>
				<span className="bold-attr">Capital: </span>
				{data.capital}
			</p>
		</div>
	);
};

export default CountryComponent;
