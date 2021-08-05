document.addEventListener("DOMContentLoaded", () => {
	render();
	searchCity();
});
//FORM
function searchCity(weatherInfo) {
	const searchBox = document.querySelector("form");
	searchBox.addEventListener("submit", (e) => {
		e.preventDefault();
		const searchResult = e.target[0].value;
	});
}

//filter search

const render = () => {
	fetch("http://localhost:3000/Location")
		.then((response) => response.json())
		.then((weather) => {
			weather.forEach((weatherInfo) => renderData(weatherInfo));
		});

	const renderData = (weatherInfo) => {
		const cityName = document.createElement("h1");
		cityName.className = "city";
		cityName.innerText = weatherInfo["City"];

		const currentTemp = document.createElement("div");
		currentTemp.className = "Current";
		currentTemp.innerText = weatherInfo.Current;

		const skyCondition = document.createElement("div");
		skyCondition.className = "sky";
		skyCondition.innerText = weatherInfo["Sky Condition"];

		const highTemp = document.createElement("div");
		highTemp.className = "high";
		highTemp.innerText = weatherInfo["High"];

		const lowTemp = document.createElement("div");
		lowTemp .className = "low";
		lowTemp.innerText = weatherInfo["Low"];

		const prec = document.createElement("div");
		prec.className = "Precipitation";
		prec.innerText = weatherInfo["Precipitation"];

		const weatherCard = document.querySelector(".card");
		weatherCard.append(
			cityName,
			currentTemp,
			skyCondition,
			highTemp,
			lowTemp,
			prec
		);
	};
};
