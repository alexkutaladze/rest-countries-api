import React, { useEffect, useState } from "react";
import { BiMoon } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import CountryComponent from "../components/CountryComponent";
import Header from "../components/Header";

const Home = () => {
	const [search, setSearch] = useState("");
	const [select, setSelect] = useState("");
	const [countryData, setCountryData] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	const displayItems = () => {
		return countryData.length > 0
			? countryData.map((item, index) => (
					<CountryComponent key={index} data={item} />
			  ))
			: "No results found";
	};

	useEffect(() => {
		fetch("https://restcountries.eu/rest/v2/all")
			.then((res) => res.json())
			.then((data) => {
				data.forEach((item: any) => {
					const newData = countryData;
					newData.push(item);
					setCountryData(newData);
				});
				setLoading(false);
			})
			.catch((e) => console.error(e));
	}, []);

	useEffect(() => {
		if (select.length > 0) {
			fetch(`https://restcountries.eu/rest/v2/region/${select}`)
				.then((res) => res.json())
				.then((data) => {
					setCountryData(data);
				})
				.catch((e) => console.error(e));
		} else {
			fetch("https://restcountries.eu/rest/v2/all")
				.then((res) => res.json())
				.then((data) => {
					data.forEach((item: any) => {
						const newData = countryData;
						newData.push(item);
						setCountryData(newData);
					});
					setLoading(false);
				})
				.catch((e) => console.error(e));
		}
	}, [select]);

	useEffect(() => {
		if (search.length > 0) {
			fetch(`https://restcountries.eu/rest/v2/name/${search}`)
				.then((res) => res.json())
				.then((data) => {
					setCountryData(data);
				})
				.catch((e) => console.error(e));
		}
		if (search.length === 0) {
			fetch("https://restcountries.eu/rest/v2/all")
				.then((res) => res.json())
				.then((data) => {
					data.forEach((item: any) => {
						const newData = countryData;
						newData.push(item);
						setCountryData(newData);
					});
					setLoading(false);
				})
				.catch((e) => console.error(e));
		}
	}, [search]);

	return (
		<>
			<Header />
			<div className="search">
				<div className="input-container">
					<AiOutlineSearch color="hsl(0, 0%, 52%)" />
					<input
						className="search-input"
						type="text"
						placeholder="Search for a country..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
				<div className="dropdown-container">
					<select
						className="select"
						defaultValue="Filter by region"
						onChange={(e) => setSelect(e.target.value)}
					>
						<option
							className="select-palceholder"
							value=""
							disabled
							selected
							hidden
						>
							Filter by region
						</option>
						<option value="Africa">Africa</option>
						<option value="Americas">America</option>
						<option value="Asia">Asia</option>
						<option value="Europe">Europe</option>
						<option value="Oceania">Oceania</option>
					</select>
				</div>
			</div>
			<div className="countries-container">
				{loading ? <p>loading...</p> : displayItems()}
			</div>
		</>
	);
};

export default Home;
