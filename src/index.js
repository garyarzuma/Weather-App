async function getWeather(city, unit) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fdadea7e4878d60da4eee4280c0d280a&units=${unit}`
    );
    const weatherJSON = await response.json();
    if (response.status !== 404) {
      return processJSON(weatherJSON);
    }
    throw new Error("Location not found!");
  } catch (error) {
    console.log(error);
    handleError();
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
    weatherObject.feelsLike = tempObject.main.feels_like;
    weatherObject.icon = tempObject.weather[0].icon;

    return weatherObject;
  }
  const weatherObject = getObject(weatherJSON);

  return weatherObject;
}

function handleError() {
  const weatherContainer = document.getElementById("weather-info-Container");
  const myDiv = document.createElement("div");
  myDiv.className = "error";
  myDiv.textContent = "Location not found!";
  weatherContainer.innerHTML = ""; //clear current contents
  weatherContainer.appendChild(myDiv);
}

function displayWeather(weatherObject) {
  const weatherContainer = document.getElementById("temp");
  const infoContainer = document.getElementById("info");
  weatherContainer.innerHTML = ""; //clear contents
  infoContainer.innerHTML = ""; //clear contents
  weatherObject.then((weather) => {
    //waits until weatherObject is resolved THEN displays the div
    for (const myKey in weather) {
      switch (myKey) {
        case "name":
          myDiv = document.createElement("div");
          myDiv.className = myKey;
          myDiv.textContent = `${weather.name}, ${weather.country}`;
          infoContainer.appendChild(myDiv);
          break;
        case "description":
          myDiv = document.createElement("div");
          myDiv.className = myKey;
          myDiv.textContent =
            weather[myKey].charAt(0).toUpperCase() + weather[myKey].slice(1);
          infoContainer.appendChild(myDiv);
          break;
        case "temp":
          myDiv = document.createElement("div");
          myDiv.className = myKey;
          myDiv.textContent =
            Math.round(weather[myKey]) +
            "\u00B0" +
            document.querySelector(".units").id;
          weatherContainer.appendChild(myDiv);
          break;
        case "feelsLike":
          myDiv = document.createElement("div");
          myDiv.className = myKey;
          myDiv.textContent =
            "Feels like: " +
            Math.round(weather[myKey]) +
            "\u00B0" +
            document.querySelector(".units").id;
          infoContainer.appendChild(myDiv);
          break;
        case "icon":
          addIcon(weather[myKey]);
          break;
      }
    }
  });
}
function addIcon(icon) {
  imgSRC = `http://openweathermap.org/img/wn/${icon}@4x.png`;
  document.querySelector("img").src = imgSRC;
}

function changeUnit() {
  const myUnit = document.querySelector(".units");
  myUnit.id = myUnit.id === "F" ? "C" : "F"; //toggles celsius and farenheit
  myUnit.innerHTML = myUnit.id === "F" ? "&#8457;" : "&#8451;";
}

function getUserInput() {
  const myForm = document.getElementById("userInput");
  const myLocation = myForm.value;
  const myUnitId = document.querySelector(".units").id;
  const myUnit = myUnitId === "F" ? "imperial" : "metric";
  const myWeather = getWeather(myLocation, myUnit); //a promise
  displayWeather(myWeather);
}

document.querySelector(".units").addEventListener("click", changeUnit);

document
  .getElementById("userInput")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      getUserInput();
    }
  });
