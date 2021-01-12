/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
async function getWeather(city, unit) {
  try {
    const response = await fetch(
      //test comment
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fdadea7e4878d60da4eee4280c0d280a&units=${unit}`,
      { mode: "cors" }
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsS0FBSyxnREFBZ0QsS0FBSztBQUNySCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGFBQWEsSUFBSSxnQkFBZ0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwrQ0FBK0MsS0FBSztBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsaURBQWlELFlBQVk7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5LCB1bml0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIC8vdGVzdCBjb21tZW50XG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPWZkYWRlYTdlNDg3OGQ2MGRhNGVlZTQyODBjMGQyODBhJnVuaXRzPSR7dW5pdH1gLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVySlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSA0MDQpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzSlNPTih3ZWF0aGVySlNPTik7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIkxvY2F0aW9uIG5vdCBmb3VuZCFcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIGhhbmRsZUVycm9yKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0pTT04od2VhdGhlckpTT04pIHtcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0T2JqZWN0KHByb2Nlc3NKU09OKSB7XG4gICAgdGVtcE9iamVjdCA9IGF3YWl0IHByb2Nlc3NKU09OO1xuICAgIGNvbnN0IHdlYXRoZXJPYmplY3QgPSB7fTtcbiAgICB3ZWF0aGVyT2JqZWN0Lm5hbWUgPSB0ZW1wT2JqZWN0Lm5hbWU7XG4gICAgd2VhdGhlck9iamVjdC5jb3VudHJ5ID0gdGVtcE9iamVjdC5zeXMuY291bnRyeTtcbiAgICB3ZWF0aGVyT2JqZWN0LmRlc2NyaXB0aW9uID0gdGVtcE9iamVjdC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIHdlYXRoZXJPYmplY3QudGVtcCA9IHRlbXBPYmplY3QubWFpbi50ZW1wO1xuICAgIHdlYXRoZXJPYmplY3QuZmVlbHNMaWtlID0gdGVtcE9iamVjdC5tYWluLmZlZWxzX2xpa2U7XG4gICAgd2VhdGhlck9iamVjdC5pY29uID0gdGVtcE9iamVjdC53ZWF0aGVyWzBdLmljb247XG5cbiAgICByZXR1cm4gd2VhdGhlck9iamVjdDtcbiAgfVxuICBjb25zdCB3ZWF0aGVyT2JqZWN0ID0gZ2V0T2JqZWN0KHdlYXRoZXJKU09OKTtcblxuICByZXR1cm4gd2VhdGhlck9iamVjdDtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gIGNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItaW5mby1Db250YWluZXJcIik7XG4gIGNvbnN0IG15RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbXlEaXYuY2xhc3NOYW1lID0gXCJlcnJvclwiO1xuICBteURpdi50ZXh0Q29udGVudCA9IFwiTG9jYXRpb24gbm90IGZvdW5kIVwiO1xuICB3ZWF0aGVyQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7IC8vY2xlYXIgY3VycmVudCBjb250ZW50c1xuICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG15RGl2KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIod2VhdGhlck9iamVjdCkge1xuICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wXCIpO1xuICBjb25zdCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpO1xuICB3ZWF0aGVyQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7IC8vY2xlYXIgY29udGVudHNcbiAgaW5mb0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiOyAvL2NsZWFyIGNvbnRlbnRzXG4gIHdlYXRoZXJPYmplY3QudGhlbigod2VhdGhlcikgPT4ge1xuICAgIC8vd2FpdHMgdW50aWwgd2VhdGhlck9iamVjdCBpcyByZXNvbHZlZCBUSEVOIGRpc3BsYXlzIHRoZSBkaXZcbiAgICBmb3IgKGNvbnN0IG15S2V5IGluIHdlYXRoZXIpIHtcbiAgICAgIHN3aXRjaCAobXlLZXkpIHtcbiAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICBteURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbXlEaXYuY2xhc3NOYW1lID0gbXlLZXk7XG4gICAgICAgICAgbXlEaXYudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLm5hbWV9LCAke3dlYXRoZXIuY291bnRyeX1gO1xuICAgICAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobXlEaXYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZGVzY3JpcHRpb25cIjpcbiAgICAgICAgICBteURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbXlEaXYuY2xhc3NOYW1lID0gbXlLZXk7XG4gICAgICAgICAgbXlEaXYudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgd2VhdGhlcltteUtleV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3ZWF0aGVyW215S2V5XS5zbGljZSgxKTtcbiAgICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKG15RGl2KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInRlbXBcIjpcbiAgICAgICAgICBteURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbXlEaXYuY2xhc3NOYW1lID0gbXlLZXk7XG4gICAgICAgICAgbXlEaXYudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgTWF0aC5yb3VuZCh3ZWF0aGVyW215S2V5XSkgK1xuICAgICAgICAgICAgXCJcXHUwMEIwXCIgK1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bml0c1wiKS5pZDtcbiAgICAgICAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG15RGl2KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImZlZWxzTGlrZVwiOlxuICAgICAgICAgIG15RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBteURpdi5jbGFzc05hbWUgPSBteUtleTtcbiAgICAgICAgICBteURpdi50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBcIkZlZWxzIGxpa2U6IFwiICtcbiAgICAgICAgICAgIE1hdGgucm91bmQod2VhdGhlcltteUtleV0pICtcbiAgICAgICAgICAgIFwiXFx1MDBCMFwiICtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdHNcIikuaWQ7XG4gICAgICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChteURpdik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJpY29uXCI6XG4gICAgICAgICAgYWRkSWNvbih3ZWF0aGVyW215S2V5XSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGFkZEljb24oaWNvbikge1xuICBpbWdTUkMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29ufUA0eC5wbmdgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLnNyYyA9IGltZ1NSQztcbn1cblxuZnVuY3Rpb24gY2hhbmdlVW5pdCgpIHtcbiAgY29uc3QgbXlVbml0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bml0c1wiKTtcbiAgbXlVbml0LmlkID0gbXlVbml0LmlkID09PSBcIkZcIiA/IFwiQ1wiIDogXCJGXCI7IC8vdG9nZ2xlcyBjZWxzaXVzIGFuZCBmYXJlbmhlaXRcbiAgbXlVbml0LmlubmVySFRNTCA9IG15VW5pdC5pZCA9PT0gXCJGXCIgPyBcIiYjODQ1NztcIiA6IFwiJiM4NDUxO1wiO1xufVxuXG5mdW5jdGlvbiBnZXRVc2VySW5wdXQoKSB7XG4gIGNvbnN0IG15Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcklucHV0XCIpO1xuICBjb25zdCBteUxvY2F0aW9uID0gbXlGb3JtLnZhbHVlO1xuICBjb25zdCBteVVuaXRJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdHNcIikuaWQ7XG4gIGNvbnN0IG15VW5pdCA9IG15VW5pdElkID09PSBcIkZcIiA/IFwiaW1wZXJpYWxcIiA6IFwibWV0cmljXCI7XG4gIGNvbnN0IG15V2VhdGhlciA9IGdldFdlYXRoZXIobXlMb2NhdGlvbiwgbXlVbml0KTsgLy9hIHByb21pc2VcbiAgZGlzcGxheVdlYXRoZXIobXlXZWF0aGVyKTtcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bml0c1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlVW5pdCk7XG5cbmRvY3VtZW50XG4gIC5nZXRFbGVtZW50QnlJZChcInVzZXJJbnB1dFwiKVxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBnZXRVc2VySW5wdXQoKTtcbiAgICB9XG4gIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==