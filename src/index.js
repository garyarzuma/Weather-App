async function getWeather(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fdadea7e4878d60da4eee4280c0d280a&units=imperial`
    );
    const weatherJSON = await response.json();
    return weatherJSON;
  } catch (error) {
    console.log(error);
  }
}

function processJSON(weatherJSON) {
  let weatherObject = {};
  //resolve a promise into an object
  async function getObject(processJSON) {
    tempObject = await processJSON;
    weatherObject["name"] = tempObject.name;
    weatherObject["country"] = tempObject.sys.country;
    weatherObject["description"] = tempObject.weather[0].description;
    weatherObject["temp"] = tempObject.main.temp;
    weatherObject["maxTemp"] = tempObject.main.temp_max;
    weatherObject["minTemp"] = tempObject.main.temp_min;
    weatherObject["feelsLike"] = tempObject.main.feels_like;
  }

  getObject(weatherJSON);
  return weatherObject;
}

console.log(processJSON(getWeather("Irvine")));
//console.log(weather);
