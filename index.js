fetch("http://localhost:3000/city")
	.then((response) => response.json())
	.then((data) => console.log(data));
