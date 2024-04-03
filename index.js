const url = 'https://meteostat.p.rapidapi.com/stations/hourly?station=10637&start=2020-01-01&end=2020-01-01&tz=Europe%2FBerlin';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d0cfe6683mshca78c4518f61f7ep14c580jsn7d693029f1c8',
		'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
