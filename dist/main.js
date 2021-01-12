/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsMERBQTBELEtBQUssZ0RBQWdELEtBQUs7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGFBQWEsSUFBSSxnQkFBZ0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwrQ0FBK0MsS0FBSztBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsaURBQWlELFlBQVk7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5LCB1bml0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD1mZGFkZWE3ZTQ4NzhkNjBkYTRlZWU0MjgwYzBkMjgwYSZ1bml0cz0ke3VuaXR9YFxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlckpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gNDA0KSB7XG4gICAgICByZXR1cm4gcHJvY2Vzc0pTT04od2VhdGhlckpTT04pO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJMb2NhdGlvbiBub3QgZm91bmQhXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBoYW5kbGVFcnJvcigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NKU09OKHdlYXRoZXJKU09OKSB7XG4gIGFzeW5jIGZ1bmN0aW9uIGdldE9iamVjdChwcm9jZXNzSlNPTikge1xuICAgIHRlbXBPYmplY3QgPSBhd2FpdCBwcm9jZXNzSlNPTjtcbiAgICBjb25zdCB3ZWF0aGVyT2JqZWN0ID0ge307XG4gICAgd2VhdGhlck9iamVjdC5uYW1lID0gdGVtcE9iamVjdC5uYW1lO1xuICAgIHdlYXRoZXJPYmplY3QuY291bnRyeSA9IHRlbXBPYmplY3Quc3lzLmNvdW50cnk7XG4gICAgd2VhdGhlck9iamVjdC5kZXNjcmlwdGlvbiA9IHRlbXBPYmplY3Qud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICB3ZWF0aGVyT2JqZWN0LnRlbXAgPSB0ZW1wT2JqZWN0Lm1haW4udGVtcDtcbiAgICB3ZWF0aGVyT2JqZWN0LmZlZWxzTGlrZSA9IHRlbXBPYmplY3QubWFpbi5mZWVsc19saWtlO1xuICAgIHdlYXRoZXJPYmplY3QuaWNvbiA9IHRlbXBPYmplY3Qud2VhdGhlclswXS5pY29uO1xuXG4gICAgcmV0dXJuIHdlYXRoZXJPYmplY3Q7XG4gIH1cbiAgY29uc3Qgd2VhdGhlck9iamVjdCA9IGdldE9iamVjdCh3ZWF0aGVySlNPTik7XG5cbiAgcmV0dXJuIHdlYXRoZXJPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLWluZm8tQ29udGFpbmVyXCIpO1xuICBjb25zdCBteURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG15RGl2LmNsYXNzTmFtZSA9IFwiZXJyb3JcIjtcbiAgbXlEaXYudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uIG5vdCBmb3VuZCFcIjtcbiAgd2VhdGhlckNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiOyAvL2NsZWFyIGN1cnJlbnQgY29udGVudHNcbiAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChteURpdik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKHdlYXRoZXJPYmplY3QpIHtcbiAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcFwiKTtcbiAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb1wiKTtcbiAgd2VhdGhlckNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiOyAvL2NsZWFyIGNvbnRlbnRzXG4gIGluZm9Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjsgLy9jbGVhciBjb250ZW50c1xuICB3ZWF0aGVyT2JqZWN0LnRoZW4oKHdlYXRoZXIpID0+IHtcbiAgICAvL3dhaXRzIHVudGlsIHdlYXRoZXJPYmplY3QgaXMgcmVzb2x2ZWQgVEhFTiBkaXNwbGF5cyB0aGUgZGl2XG4gICAgZm9yIChjb25zdCBteUtleSBpbiB3ZWF0aGVyKSB7XG4gICAgICBzd2l0Y2ggKG15S2V5KSB7XG4gICAgICAgIGNhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgbXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG15RGl2LmNsYXNzTmFtZSA9IG15S2V5O1xuICAgICAgICAgIG15RGl2LnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5uYW1lfSwgJHt3ZWF0aGVyLmNvdW50cnl9YDtcbiAgICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKG15RGl2KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImRlc2NyaXB0aW9uXCI6XG4gICAgICAgICAgbXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG15RGl2LmNsYXNzTmFtZSA9IG15S2V5O1xuICAgICAgICAgIG15RGl2LnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIHdlYXRoZXJbbXlLZXldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2VhdGhlcltteUtleV0uc2xpY2UoMSk7XG4gICAgICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChteURpdik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ0ZW1wXCI6XG4gICAgICAgICAgbXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG15RGl2LmNsYXNzTmFtZSA9IG15S2V5O1xuICAgICAgICAgIG15RGl2LnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIE1hdGgucm91bmQod2VhdGhlcltteUtleV0pICtcbiAgICAgICAgICAgIFwiXFx1MDBCMFwiICtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdHNcIikuaWQ7XG4gICAgICAgICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChteURpdik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJmZWVsc0xpa2VcIjpcbiAgICAgICAgICBteURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbXlEaXYuY2xhc3NOYW1lID0gbXlLZXk7XG4gICAgICAgICAgbXlEaXYudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgXCJGZWVscyBsaWtlOiBcIiArXG4gICAgICAgICAgICBNYXRoLnJvdW5kKHdlYXRoZXJbbXlLZXldKSArXG4gICAgICAgICAgICBcIlxcdTAwQjBcIiArXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVuaXRzXCIpLmlkO1xuICAgICAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobXlEaXYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiaWNvblwiOlxuICAgICAgICAgIGFkZEljb24od2VhdGhlcltteUtleV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBhZGRJY29uKGljb24pIHtcbiAgaW1nU1JDID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbn1ANHgucG5nYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImltZ1wiKS5zcmMgPSBpbWdTUkM7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVVuaXQoKSB7XG4gIGNvbnN0IG15VW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdHNcIik7XG4gIG15VW5pdC5pZCA9IG15VW5pdC5pZCA9PT0gXCJGXCIgPyBcIkNcIiA6IFwiRlwiOyAvL3RvZ2dsZXMgY2Vsc2l1cyBhbmQgZmFyZW5oZWl0XG4gIG15VW5pdC5pbm5lckhUTUwgPSBteVVuaXQuaWQgPT09IFwiRlwiID8gXCImIzg0NTc7XCIgOiBcIiYjODQ1MTtcIjtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlcklucHV0KCkge1xuICBjb25zdCBteUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJJbnB1dFwiKTtcbiAgY29uc3QgbXlMb2NhdGlvbiA9IG15Rm9ybS52YWx1ZTtcbiAgY29uc3QgbXlVbml0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVuaXRzXCIpLmlkO1xuICBjb25zdCBteVVuaXQgPSBteVVuaXRJZCA9PT0gXCJGXCIgPyBcImltcGVyaWFsXCIgOiBcIm1ldHJpY1wiO1xuICBjb25zdCBteVdlYXRoZXIgPSBnZXRXZWF0aGVyKG15TG9jYXRpb24sIG15VW5pdCk7IC8vYSBwcm9taXNlXG4gIGRpc3BsYXlXZWF0aGVyKG15V2VhdGhlcik7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdHNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZVVuaXQpO1xuXG5kb2N1bWVudFxuICAuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VySW5wdXRcIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgZ2V0VXNlcklucHV0KCk7XG4gICAgfVxuICB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=