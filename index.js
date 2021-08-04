document.addEventListener("DOMContentLoaded", () => {
	render();
	// searchCity();
});

const render = () => {
	fetch("http://localhost:3000/Location")
		.then((response) => response.json())
		.then((weather) => {
			weather.forEach((weatherInfo) => renderData(weatherInfo));
		});
};
// rendering the data
const renderData = (weatherInfo) => {
	const currentTemp = document.querySelector("#Current");
	currentTemp.innerText = weatherInfo.Current;

	const cityName = document.querySelector(".city");
	cityName.innerText = weatherInfo["City"];

	const skyCondition = document.querySelector(".sky");
	skyCondition.innerText = weatherInfo["Sky Condition"];

	const highTemp = document.querySelector("#high");
	highTemp.innerText = weatherInfo["High"];

	const lowTemp = document.querySelector("#low");
	lowTemp.innerText = weatherInfo["Low"];

	const prec = document.querySelector("#precipitation");
	prec.innerText = weatherInfo["Precipitation"];

	// newCity();
};

// Search Form

// function searchCity(weatherInfo) {
// 	const searchBox = document.querySelector("form");
// 	searchBox.addEventListener("submit", (e) => {
// 		e.preventDefault();
// 		console.log(e.target[0].value);
// 	});
// }

// Create Weather Cards for Each city

// function newCity(search) {
// 	const findCity = document.createElement("h1");
// 	findCity.textContent = search["City"];
// 	document.querySelector("#condition").appendChild(findCity);
// }
