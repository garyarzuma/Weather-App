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
    handleError();
  }
}

function processJSON(weatherJSON) {
  async function getObject(processJSON) {
    tempObject = await processJSON;
    console.log(tempObject);
    const weatherObject = {};
    weatherObject.name = tempObject.name;
    weatherObject.country = tempObject.sys.country;
    weatherObject.description = tempObject.weather[0].description;
    weatherObject.temp = tempObject.main.temp;
    weatherObject.feelsLike = tempObject.main.feels_like;

    return weatherObject;
  }
  const weatherObject = getObject(weatherJSON);
  weatherObject.then((d) => console.log(d)); //can delete

  return weatherObject;
}

function handleError() {
  const weatherContainer = document.getElementById("weatherContainer");
  const myDiv = document.createElement("div");
  myDiv.className = "error";
  myDiv.textContent = "Location not found!";
  weatherContainer.innerHTML = ""; //clear current contents
  weatherContainer.appendChild(myDiv);
}

function displayWeather(weatherObject) {
  const weatherContainer = document.getElementById("weatherContainer");
  weatherContainer.innerHTML = ""; //clear contents
  weatherObject.then((weather) => {
    //waits until weatherObject is resolved THEN displays the div
    for (const myKey in weather) {
      const myDiv = document.createElement("div");
      myDiv.className = myKey;
      switch (myKey) {
        case "name":
          myDiv.textContent = `${weather.name}, ${weather.country}`;
          break;
        case "description":
          myDiv.textContent =
            weather[myKey].charAt(0).toUpperCase() + weather[myKey].slice(1);
          break;
        case "temp":
          myDiv.textContent = Math.round(weather[myKey]) + "\u00B0F";
          break;
        case "feelsLike":
          myDiv.textContent =
            "Feels like: " + Math.round(weather[myKey]) + "\u00B0F";
      }
      if (myKey !== "country") {
        weatherContainer.appendChild(myDiv);
      }
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

//event listeners for clicking on Find and pressing enter when in textbox
document.getElementById("submit").addEventListener("click", getUserInput);
document
  .getElementById("userInput")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      getUserInput();
    }
  });
