async function getWeather(city) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fdadea7e4878d60da4eee4280c0d280a&units=imperial`
  );
  const weather = await response.json();
  console.log(weather.main.temp);
  return weather.main.temp;
}

getWeather("Irvine");
//const weather = await getWeather("Irvine");
//console.log(weather);
