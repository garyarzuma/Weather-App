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
  const weatherContainer = document.getElementById("temp");
  const infoContainer = document.getElementById("info");
  const myErrorDiv = document.getElementById("error");
  document.querySelector("img").src = "#";
  myErrorDiv.textContent = "Location not found!";
  weatherContainer.innerHTML = ""; //clear current contents
  infoContainer.innerHTML = ""; //clear contents
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsS0FBSyxnREFBZ0QsS0FBSztBQUNySCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQywrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsYUFBYSxJQUFJLGdCQUFnQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLCtDQUErQyxLQUFLO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QztBQUM1QyxpREFBaUQsWUFBWTtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHksIHVuaXQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgLy90ZXN0IGNvbW1lbnRcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9ZmRhZGVhN2U0ODc4ZDYwZGE0ZWVlNDI4MGMwZDI4MGEmdW5pdHM9JHt1bml0fWAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDQwNCkge1xuICAgICAgcmV0dXJuIHByb2Nlc3NKU09OKHdlYXRoZXJKU09OKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTG9jYXRpb24gbm90IGZvdW5kIVwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgaGFuZGxlRXJyb3IoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcm9jZXNzSlNPTih3ZWF0aGVySlNPTikge1xuICBhc3luYyBmdW5jdGlvbiBnZXRPYmplY3QocHJvY2Vzc0pTT04pIHtcbiAgICB0ZW1wT2JqZWN0ID0gYXdhaXQgcHJvY2Vzc0pTT047XG4gICAgY29uc3Qgd2VhdGhlck9iamVjdCA9IHt9O1xuICAgIHdlYXRoZXJPYmplY3QubmFtZSA9IHRlbXBPYmplY3QubmFtZTtcbiAgICB3ZWF0aGVyT2JqZWN0LmNvdW50cnkgPSB0ZW1wT2JqZWN0LnN5cy5jb3VudHJ5O1xuICAgIHdlYXRoZXJPYmplY3QuZGVzY3JpcHRpb24gPSB0ZW1wT2JqZWN0LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgd2VhdGhlck9iamVjdC50ZW1wID0gdGVtcE9iamVjdC5tYWluLnRlbXA7XG4gICAgd2VhdGhlck9iamVjdC5mZWVsc0xpa2UgPSB0ZW1wT2JqZWN0Lm1haW4uZmVlbHNfbGlrZTtcbiAgICB3ZWF0aGVyT2JqZWN0Lmljb24gPSB0ZW1wT2JqZWN0LndlYXRoZXJbMF0uaWNvbjtcblxuICAgIHJldHVybiB3ZWF0aGVyT2JqZWN0O1xuICB9XG4gIGNvbnN0IHdlYXRoZXJPYmplY3QgPSBnZXRPYmplY3Qod2VhdGhlckpTT04pO1xuXG4gIHJldHVybiB3ZWF0aGVyT2JqZWN0O1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcFwiKTtcbiAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb1wiKTtcbiAgY29uc3QgbXlFcnJvckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikuc3JjID0gXCIjXCI7XG4gIG15RXJyb3JEaXYudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uIG5vdCBmb3VuZCFcIjtcbiAgd2VhdGhlckNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiOyAvL2NsZWFyIGN1cnJlbnQgY29udGVudHNcbiAgaW5mb0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiOyAvL2NsZWFyIGNvbnRlbnRzXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKHdlYXRoZXJPYmplY3QpIHtcbiAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcFwiKTtcbiAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb1wiKTtcbiAgY29uc3QgbXlFcnJvckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIik7XG4gIG15RXJyb3JEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgd2VhdGhlckNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiOyAvL2NsZWFyIGNvbnRlbnRzXG4gIGluZm9Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjsgLy9jbGVhciBjb250ZW50c1xuICB3ZWF0aGVyT2JqZWN0LnRoZW4oKHdlYXRoZXIpID0+IHtcbiAgICAvL3dhaXRzIHVudGlsIHdlYXRoZXJPYmplY3QgaXMgcmVzb2x2ZWQgVEhFTiBkaXNwbGF5cyB0aGUgZGl2XG4gICAgZm9yIChjb25zdCBteUtleSBpbiB3ZWF0aGVyKSB7XG4gICAgICBzd2l0Y2ggKG15S2V5KSB7XG4gICAgICAgIGNhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgbXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG15RGl2LmNsYXNzTmFtZSA9IG15S2V5O1xuICAgICAgICAgIG15RGl2LnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5uYW1lfSwgJHt3ZWF0aGVyLmNvdW50cnl9YDtcbiAgICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKG15RGl2KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImRlc2NyaXB0aW9uXCI6XG4gICAgICAgICAgbXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG15RGl2LmNsYXNzTmFtZSA9IG15S2V5O1xuICAgICAgICAgIG15RGl2LnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIHdlYXRoZXJbbXlLZXldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2VhdGhlcltteUtleV0uc2xpY2UoMSk7XG4gICAgICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChteURpdik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ0ZW1wXCI6XG4gICAgICAgICAgbXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG15RGl2LmNsYXNzTmFtZSA9IG15S2V5O1xuICAgICAgICAgIG15RGl2LnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIE1hdGgucm91bmQod2VhdGhlcltteUtleV0pICtcbiAgICAgICAgICAgIFwiXFx1MDBCMFwiICtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdHNcIikuaWQ7XG4gICAgICAgICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChteURpdik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJmZWVsc0xpa2VcIjpcbiAgICAgICAgICBteURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbXlEaXYuY2xhc3NOYW1lID0gbXlLZXk7XG4gICAgICAgICAgbXlEaXYudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgXCJGZWVscyBsaWtlOiBcIiArXG4gICAgICAgICAgICBNYXRoLnJvdW5kKHdlYXRoZXJbbXlLZXldKSArXG4gICAgICAgICAgICBcIlxcdTAwQjBcIiArXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVuaXRzXCIpLmlkO1xuICAgICAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobXlEaXYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiaWNvblwiOlxuICAgICAgICAgIGFkZEljb24od2VhdGhlcltteUtleV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBhZGRJY29uKGljb24pIHtcbiAgaW1nU1JDID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbn1ANHgucG5nYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImltZ1wiKS5zcmMgPSBpbWdTUkM7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVVuaXQoKSB7XG4gIGNvbnN0IG15VW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdHNcIik7XG4gIG15VW5pdC5pZCA9IG15VW5pdC5pZCA9PT0gXCJGXCIgPyBcIkNcIiA6IFwiRlwiOyAvL3RvZ2dsZXMgY2Vsc2l1cyBhbmQgZmFyZW5oZWl0XG4gIG15VW5pdC5pbm5lckhUTUwgPSBteVVuaXQuaWQgPT09IFwiRlwiID8gXCImIzg0NTc7XCIgOiBcIiYjODQ1MTtcIjtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlcklucHV0KCkge1xuICBjb25zdCBteUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJJbnB1dFwiKTtcbiAgY29uc3QgbXlMb2NhdGlvbiA9IG15Rm9ybS52YWx1ZTtcbiAgY29uc3QgbXlVbml0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVuaXRzXCIpLmlkO1xuICBjb25zdCBteVVuaXQgPSBteVVuaXRJZCA9PT0gXCJGXCIgPyBcImltcGVyaWFsXCIgOiBcIm1ldHJpY1wiO1xuICBjb25zdCBteVdlYXRoZXIgPSBnZXRXZWF0aGVyKG15TG9jYXRpb24sIG15VW5pdCk7IC8vYSBwcm9taXNlXG4gIGRpc3BsYXlXZWF0aGVyKG15V2VhdGhlcik7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdHNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZVVuaXQpO1xuXG5kb2N1bWVudFxuICAuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VySW5wdXRcIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgZ2V0VXNlcklucHV0KCk7XG4gICAgfVxuICB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=