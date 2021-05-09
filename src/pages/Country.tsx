import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../components/Header";

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
		<>
			<Header />
			<div className="back" onClick={() => history.goBack()}>
				<BiArrowBack />
				<p>Back</p>
			</div>
			<div className="country-info">
				<img src={location.state.flag} alt="flag" />
				<div className="country-details">
					<h2>{location.state.name}</h2>
					<div className="more-details">
						<div>
							<p>
								<span className="bold-attr">Native Name: </span>
								{location.state.nativeName}
							</p>
							<p>
								<span className="bold-attr">Population: </span>
								{populationFormat.format(
									location.state.population
								)}
							</p>
							<p>
								<span className="bold-attr">Region: </span>
								{location.state.region}
							</p>
							<p>
								<span className="bold-attr">Sub Region: </span>
								{location.state.subregion}
							</p>
							<p>
								<span className="bold-attr">Capital: </span>
								{location.state.capital}
							</p>
						</div>
						<div>
							<p>
								<span className="bold-attr">
									Top Level Domain:{" "}
								</span>
								{location.state.topLevelDomain}
							</p>
							<p>
								<span className="bold-attr">Currencies: </span>
								{location.state.currencies[0].name}
							</p>
							<p>
								<span className="bold-attr">Languages: </span>
								{location.state.languages[0].name}
							</p>
						</div>
					</div>
					<div className="border-container">
						<p className="bold-attr">Border Countries: </p>
						{displayBorders()}
					</div>
				</div>
			</div>
		</>
	);
};

const BorderButton: React.FC<{ data: any }> = ({ data }) => {
	const history = useHistory();
	return (
		<div
			className="border-btn"
			onClick={() => history.push(`/country/${data.name}`, { ...data })}
		>
			{data.name}
		</div>
	);
};

export default Country;
