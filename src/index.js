async function getWeather(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fdadea7e4878d60da4eee4280c0d280a&units=imperial`
    );
    const weatherJSON = await response.json();
    console.log(response.status);
    if (response.status !== 404) {
      return processJSON(weatherJSON);
    }
    throw new Error("Location not found!");
  } catch (error) {
    console.log(error);
    //handleError();
  }
}

function processJSON(weatherJSON) {
  async function getObject(processJSON) {
    tempObject = await processJSON;

    const weatherObject = {};
    weatherObject.name = tempObject.name;
    weatherObject.country = tempObject.sys.country;
    weatherObject.description = tempObject.weather[0].description;
    weatherObject.temp = tempObject.main.temp;
    weatherObject.maxTemp = tempObject.main.temp_max;
    weatherObject.minTemp = tempObject.main.temp_min;
    weatherObject.feelsLike = tempObject.main.feels_like;

    return weatherObject;
  }
  const weatherObject = getObject(weatherJSON);
  weatherObject.then((d) => console.log(d)); //can delete

  return weatherObject;
}

function displayWeather(weatherObject) {
  const weatherContainer = document.getElementById("weatherContainer");
  weatherObject.then((weather) => {
    //waits until weatherObject is resolved THEN displays the div
    for (const myKey in weather) {
      const myDiv = document.createElement("div");
      myDiv.className = weather.myKey;
      myDiv.textContent = weather[myKey];
      weatherContainer.appendChild(myDiv);
    }
  });
}

function getUserInput() {
  const myForm = document.getElementById("userInput");
  const myLocation = myForm.value;
  const myWeather = getWeather(myLocation); //a promise
  displayWeather(myWeather);
  //console.log(myObject);
}

document.getElementById("submit").addEventListener("click", getUserInput);
