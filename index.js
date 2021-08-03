document.addEventListener("DOMContentLoaded", () => {
	render();
});

const render = () => {
	fetch("http://localhost:3000/Location")
		.then((response) => response.json())
		.then((weather) => renderData(weather));
};
// rendering the data
function renderData(weatherInfo) {
	const cityName = document.querySelector(".city");
	cityName.innerText = weatherInfo["City"];

	const currentTemp = document.querySelector("#Current");
	currentTemp.innerText = weatherInfo["Current"];

	const skyCondition = document.querySelector(".sky");
	skyCondition.innerText = weatherInfo["Sky Condition"];

	const highTemp = document.querySelector("#high");
	highTemp.innerText = weatherInfo["High"];

	const lowTemp = document.querySelector("#low");
	lowTemp.innerText = weatherInfo["Low"];
	
}
