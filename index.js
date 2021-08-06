document.addEventListener("DOMContentLoaded", () => {
	search();
});

//user enters string
function search(weatherInfo) {
	const searchBox = document.querySelector("form");
	//when string is submitted prevent refresh
	searchBox.addEventListener("submit", (e) => {
		e.preventDefault();
		//take the string value and save into const variable to be used later
		const searchResult = e.target[0].value;
		//how to check if string value is a match to the data object
		// if (searchResult == `${weatherInfo.name}`) {
		// 	console.log(renderData(weatherInfo));
		// }
		fetch("http://localhost:3000/Location")
			.then((response) => response.json())
			.then((weather) => {
				const result = weather.filter((weatherInfo) => {
					return searchResult === weatherInfo.City;
				});
				result.forEach((weatherInfo) => renderData(weatherInfo));
			});
		searchBox.reset();
	});
}

//fetch data
//convert data to readeble js
//we get an array of objects
//
const render = () => {
	fetch("http://localhost:3000/Location")
		.then((response) => response.json())
		.then((weather) => {
			weather.forEach((weatherInfo) => renderData(weatherInfo));
		});
};
const renderData = (weatherInfo) => {
	const cardEl = document.createElement("section");
	cardEl.className = "card";
	//Created Element for cicty
	const cityName = document.createElement("h1");
	cityName.className = "city";
	//change text info
	cityName.innerText = weatherInfo["City"];

	const currentTemp = document.createElement("div");
	currentTemp.className = "Current";
	//change text info
	currentTemp.innerText = weatherInfo.Current;

	const skyCondition = document.createElement("div");
	skyCondition.className = "sky";
	//change text info
	skyCondition.innerText = weatherInfo["Sky Condition"];

	const highTemp = document.createElement("div");
	highTemp.className = "high";
	//change text info
	highTemp.innerText = `Hi: ${weatherInfo["High"]} `;

	const lowTemp = document.createElement("div");
	lowTemp.className = "low";
	//change text info
	lowTemp.innerText = `Lo: ${weatherInfo["Low"]}`;

	const prec = document.createElement("div");
	prec.className = "Precipitation";
	//change text info
	prec.innerText = `Chance of Rain ${weatherInfo["Precipitation"]}`;

	const weatherCard = document.querySelector(".contain");
	weatherCard.innerHTML = " ";
	weatherCard.append(
		cardEl,
		cityName,
		currentTemp,
		skyCondition,
		highTemp,
		lowTemp,
		prec
	);
};
