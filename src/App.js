import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
	const [weather, setWeather] = useState(null);
	const [input, setInput] = useState("Abu Dhabi");
	useEffect(() => {
		axios
			.get(
				`http://api.weatherapi.com/v1/current.json?key=6b29b0d2ca094fbaad0213931222201&q=Abu Dhabi&aqi=yes`
			)
			.then((data) => {
				setWeather(data.data);
				console.log(data.data);
			})
			.catch((err) => console.log(err));
	}, []);

	const weatherInput = (e) => {
		setInput(e.target.value);
	};

	const searchWeather = () => {
		axios
			.get(
				`http://api.weatherapi.com/v1/current.json?key=6b29b0d2ca094fbaad0213931222201&q=${input}}&aqi=yes`
			)
			.then((data) => {
				setWeather(data.data);
				console.log(data.data);
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			{weather && (
				<div>
					<div className="search">
						<input type="text" onChange={weatherInput} />
						<button onClick={searchWeather}>Search</button>
					</div>

					<div className="weather-info">
						<h1>{weather.location.name}</h1>
						<h2>{weather.location.country}</h2>
						<div className="condition">
							<h3>{weather.current.condition.text}</h3>
							<img src={weather.current.condition.icon} alt="weather image" />
							<h3>{weather.current.temp_c} degree Celsius</h3>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
