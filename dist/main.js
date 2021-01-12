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
    weatherObject.icon = tempObject.weather[0].icon;

    return weatherObject;
  }
  const weatherObject = getObject(weatherJSON);

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
      switch (myKey) {
        case "name":
          myDiv = document.createElement("div");
          myDiv.className = myKey;
          myDiv.textContent = `${weather.name}, ${weather.country}`;
          break;
        case "description":
          myDiv = document.createElement("div");
          myDiv.className = myKey;
          myDiv.textContent =
            weather[myKey].charAt(0).toUpperCase() + weather[myKey].slice(1);
          break;
        case "temp":
          myDiv = document.createElement("div");
          myDiv.className = myKey;
          myDiv.textContent = Math.round(weather[myKey]) + "\u00B0F";
          break;
        case "feelsLike":
          myDiv = document.createElement("div");
          myDiv.className = myKey;
          myDiv.textContent =
            "Feels like: " + Math.round(weather[myKey]) + "\u00B0F";
        case "icon":
          //addIcon();
          break;
      }
      if (myKey !== "country" || myKey !== "icon") {
        weatherContainer.appendChild(myDiv);
      }
    }
  });
}

function changeUnit() {
  myUnit = document.querySelector(".units");
  myUnit.id = myUnit.id === "F" ? "C" : "F"; //toggles celsius and farenheit
  myUnit.textContent = myUnit.id;
  console.log(myUnit.id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsMERBQTBELEtBQUssZ0RBQWdELEtBQUs7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxhQUFhLElBQUksZ0JBQWdCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSwgdW5pdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9ZmRhZGVhN2U0ODc4ZDYwZGE0ZWVlNDI4MGMwZDI4MGEmdW5pdHM9JHt1bml0fWBcbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gNDA0KSB7XG4gICAgICByZXR1cm4gcHJvY2Vzc0pTT04od2VhdGhlckpTT04pO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJMb2NhdGlvbiBub3QgZm91bmQhXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBoYW5kbGVFcnJvcigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NKU09OKHdlYXRoZXJKU09OKSB7XG4gIGFzeW5jIGZ1bmN0aW9uIGdldE9iamVjdChwcm9jZXNzSlNPTikge1xuICAgIHRlbXBPYmplY3QgPSBhd2FpdCBwcm9jZXNzSlNPTjtcbiAgICBjb25zb2xlLmxvZyh0ZW1wT2JqZWN0KTtcbiAgICBjb25zdCB3ZWF0aGVyT2JqZWN0ID0ge307XG4gICAgd2VhdGhlck9iamVjdC5uYW1lID0gdGVtcE9iamVjdC5uYW1lO1xuICAgIHdlYXRoZXJPYmplY3QuY291bnRyeSA9IHRlbXBPYmplY3Quc3lzLmNvdW50cnk7XG4gICAgd2VhdGhlck9iamVjdC5kZXNjcmlwdGlvbiA9IHRlbXBPYmplY3Qud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICB3ZWF0aGVyT2JqZWN0LnRlbXAgPSB0ZW1wT2JqZWN0Lm1haW4udGVtcDtcbiAgICB3ZWF0aGVyT2JqZWN0LmZlZWxzTGlrZSA9IHRlbXBPYmplY3QubWFpbi5mZWVsc19saWtlO1xuICAgIHdlYXRoZXJPYmplY3QuaWNvbiA9IHRlbXBPYmplY3Qud2VhdGhlclswXS5pY29uO1xuXG4gICAgcmV0dXJuIHdlYXRoZXJPYmplY3Q7XG4gIH1cbiAgY29uc3Qgd2VhdGhlck9iamVjdCA9IGdldE9iamVjdCh3ZWF0aGVySlNPTik7XG5cbiAgcmV0dXJuIHdlYXRoZXJPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyQ29udGFpbmVyXCIpO1xuICBjb25zdCBteURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG15RGl2LmNsYXNzTmFtZSA9IFwiZXJyb3JcIjtcbiAgbXlEaXYudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uIG5vdCBmb3VuZCFcIjtcbiAgd2VhdGhlckNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiOyAvL2NsZWFyIGN1cnJlbnQgY29udGVudHNcbiAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChteURpdik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKHdlYXRoZXJPYmplY3QpIHtcbiAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlckNvbnRhaW5lclwiKTtcbiAgd2VhdGhlckNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiOyAvL2NsZWFyIGNvbnRlbnRzXG4gIHdlYXRoZXJPYmplY3QudGhlbigod2VhdGhlcikgPT4ge1xuICAgIC8vd2FpdHMgdW50aWwgd2VhdGhlck9iamVjdCBpcyByZXNvbHZlZCBUSEVOIGRpc3BsYXlzIHRoZSBkaXZcbiAgICBmb3IgKGNvbnN0IG15S2V5IGluIHdlYXRoZXIpIHtcbiAgICAgIHN3aXRjaCAobXlLZXkpIHtcbiAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICBteURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbXlEaXYuY2xhc3NOYW1lID0gbXlLZXk7XG4gICAgICAgICAgbXlEaXYudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLm5hbWV9LCAke3dlYXRoZXIuY291bnRyeX1gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZGVzY3JpcHRpb25cIjpcbiAgICAgICAgICBteURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbXlEaXYuY2xhc3NOYW1lID0gbXlLZXk7XG4gICAgICAgICAgbXlEaXYudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgd2VhdGhlcltteUtleV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3ZWF0aGVyW215S2V5XS5zbGljZSgxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInRlbXBcIjpcbiAgICAgICAgICBteURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbXlEaXYuY2xhc3NOYW1lID0gbXlLZXk7XG4gICAgICAgICAgbXlEaXYudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHdlYXRoZXJbbXlLZXldKSArIFwiXFx1MDBCMEZcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImZlZWxzTGlrZVwiOlxuICAgICAgICAgIG15RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBteURpdi5jbGFzc05hbWUgPSBteUtleTtcbiAgICAgICAgICBteURpdi50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBcIkZlZWxzIGxpa2U6IFwiICsgTWF0aC5yb3VuZCh3ZWF0aGVyW215S2V5XSkgKyBcIlxcdTAwQjBGXCI7XG4gICAgICAgIGNhc2UgXCJpY29uXCI6XG4gICAgICAgICAgLy9hZGRJY29uKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAobXlLZXkgIT09IFwiY291bnRyeVwiIHx8IG15S2V5ICE9PSBcImljb25cIikge1xuICAgICAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG15RGl2KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VVbml0KCkge1xuICBteVVuaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVuaXRzXCIpO1xuICBteVVuaXQuaWQgPSBteVVuaXQuaWQgPT09IFwiRlwiID8gXCJDXCIgOiBcIkZcIjsgLy90b2dnbGVzIGNlbHNpdXMgYW5kIGZhcmVuaGVpdFxuICBteVVuaXQudGV4dENvbnRlbnQgPSBteVVuaXQuaWQ7XG4gIGNvbnNvbGUubG9nKG15VW5pdC5pZCk7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJJbnB1dCgpIHtcbiAgY29uc3QgbXlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VySW5wdXRcIik7XG4gIGNvbnN0IG15TG9jYXRpb24gPSBteUZvcm0udmFsdWU7XG4gIGNvbnN0IG15VW5pdElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bml0c1wiKS5pZDtcbiAgY29uc3QgbXlVbml0ID0gbXlVbml0SWQgPT09IFwiRlwiID8gXCJpbXBlcmlhbFwiIDogXCJtZXRyaWNcIjtcbiAgY29uc3QgbXlXZWF0aGVyID0gZ2V0V2VhdGhlcihteUxvY2F0aW9uLCBteVVuaXQpOyAvL2EgcHJvbWlzZVxuICBkaXNwbGF5V2VhdGhlcihteVdlYXRoZXIpO1xufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVuaXRzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VVbml0KTtcblxuZG9jdW1lbnRcbiAgLmdldEVsZW1lbnRCeUlkKFwidXNlcklucHV0XCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGdldFVzZXJJbnB1dCgpO1xuICAgIH1cbiAgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9