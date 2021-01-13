const displayToDom = (() => {
  function displayWeather(weatherObject) {
    const weatherContainer = document.getElementById("temp");
    const infoContainer = document.getElementById("info");
    const myErrorDiv = document.getElementById("error");
    myErrorDiv.innerHTML = "";
    weatherContainer.innerHTML = ""; //clear contents
    infoContainer.innerHTML = ""; //clear contents
    weatherObject.then((weather) => {
      //waits until weatherObject is resolved THEN displays the div
      for (const myKey in weather) {
        switch (myKey) {
          case "name":
            let myDiv = document.createElement("div");
            myDiv.className = myKey;
            myDiv.textContent = `${weather.name}, ${weather.country}`;
            infoContainer.appendChild(myDiv);
            break;
          case "description":
            let myDiv2 = document.createElement("div");
            myDiv2.className = myKey;
            myDiv2.textContent =
              weather[myKey].charAt(0).toUpperCase() + weather[myKey].slice(1);
            infoContainer.appendChild(myDiv2);
            break;
          case "temp":
            let myDiv3 = document.createElement("div");
            myDiv3.className = myKey;
            myDiv3.textContent =
              Math.round(weather[myKey]) +
              "\u00B0" +
              document.querySelector(".units").id;
            weatherContainer.appendChild(myDiv3);
            break;
          case "feelsLike":
            let myDiv4 = document.createElement("div");
            myDiv4.className = myKey;
            myDiv4.textContent =
              "Feels like: " +
              Math.round(weather[myKey]) +
              "\u00B0" +
              document.querySelector(".units").id;
            infoContainer.appendChild(myDiv4);
            break;
          case "icon":
            addIcon(weather[myKey]);
            break;
        }
      }
    });
  }

  function handleError() {
    const weatherContainer = document.getElementById("temp");
    const infoContainer = document.getElementById("info");
    const myErrorDiv = document.getElementById("error");
    document.querySelector("img").src = "#";
    myErrorDiv.textContent = "Location not found!";
    weatherContainer.innerHTML = ""; //clear current contents
    infoContainer.innerHTML = ""; //clear contents
  }

  //adds the weather icon with an api call
  function addIcon(icon) {
    const imgSRC = `http://openweathermap.org/img/wn/${icon}@4x.png`;
    document.querySelector("img").src = imgSRC;
  }

  function changeUnit() {
    const myUnit = document.querySelector(".units");
    myUnit.id = myUnit.id === "F" ? "C" : "F"; //toggles celsius and farenheit
    myUnit.innerHTML = myUnit.id === "F" ? "&#8457;" : "&#8451;";
  }

  return { changeUnit, displayWeather, handleError };
})();

export default displayToDom;
