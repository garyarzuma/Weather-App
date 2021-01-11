/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsMERBQTBELEtBQUs7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9ZmRhZGVhN2U0ODc4ZDYwZGE0ZWVlNDI4MGMwZDI4MGEmdW5pdHM9aW1wZXJpYWxgXG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVySlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXMpO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDQwNCkge1xuICAgICAgcmV0dXJuIHByb2Nlc3NKU09OKHdlYXRoZXJKU09OKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTG9jYXRpb24gbm90IGZvdW5kIVwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy9oYW5kbGVFcnJvcigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NKU09OKHdlYXRoZXJKU09OKSB7XG4gIGFzeW5jIGZ1bmN0aW9uIGdldE9iamVjdChwcm9jZXNzSlNPTikge1xuICAgIHRlbXBPYmplY3QgPSBhd2FpdCBwcm9jZXNzSlNPTjtcblxuICAgIGNvbnN0IHdlYXRoZXJPYmplY3QgPSB7fTtcbiAgICB3ZWF0aGVyT2JqZWN0Lm5hbWUgPSB0ZW1wT2JqZWN0Lm5hbWU7XG4gICAgd2VhdGhlck9iamVjdC5jb3VudHJ5ID0gdGVtcE9iamVjdC5zeXMuY291bnRyeTtcbiAgICB3ZWF0aGVyT2JqZWN0LmRlc2NyaXB0aW9uID0gdGVtcE9iamVjdC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIHdlYXRoZXJPYmplY3QudGVtcCA9IHRlbXBPYmplY3QubWFpbi50ZW1wO1xuICAgIHdlYXRoZXJPYmplY3QubWF4VGVtcCA9IHRlbXBPYmplY3QubWFpbi50ZW1wX21heDtcbiAgICB3ZWF0aGVyT2JqZWN0Lm1pblRlbXAgPSB0ZW1wT2JqZWN0Lm1haW4udGVtcF9taW47XG4gICAgd2VhdGhlck9iamVjdC5mZWVsc0xpa2UgPSB0ZW1wT2JqZWN0Lm1haW4uZmVlbHNfbGlrZTtcblxuICAgIHJldHVybiB3ZWF0aGVyT2JqZWN0O1xuICB9XG4gIGNvbnN0IHdlYXRoZXJPYmplY3QgPSBnZXRPYmplY3Qod2VhdGhlckpTT04pO1xuICB3ZWF0aGVyT2JqZWN0LnRoZW4oKGQpID0+IGNvbnNvbGUubG9nKGQpKTsgLy9jYW4gZGVsZXRlXG5cbiAgcmV0dXJuIHdlYXRoZXJPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKHdlYXRoZXJPYmplY3QpIHtcbiAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlckNvbnRhaW5lclwiKTtcbiAgd2VhdGhlck9iamVjdC50aGVuKCh3ZWF0aGVyKSA9PiB7XG4gICAgLy93YWl0cyB1bnRpbCB3ZWF0aGVyT2JqZWN0IGlzIHJlc29sdmVkIFRIRU4gZGlzcGxheXMgdGhlIGRpdlxuICAgIGZvciAoY29uc3QgbXlLZXkgaW4gd2VhdGhlcikge1xuICAgICAgY29uc3QgbXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbXlEaXYuY2xhc3NOYW1lID0gd2VhdGhlci5teUtleTtcbiAgICAgIG15RGl2LnRleHRDb250ZW50ID0gd2VhdGhlcltteUtleV07XG4gICAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG15RGl2KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRVc2VySW5wdXQoKSB7XG4gIGNvbnN0IG15Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcklucHV0XCIpO1xuICBjb25zdCBteUxvY2F0aW9uID0gbXlGb3JtLnZhbHVlO1xuICBjb25zdCBteVdlYXRoZXIgPSBnZXRXZWF0aGVyKG15TG9jYXRpb24pOyAvL2EgcHJvbWlzZVxuICBkaXNwbGF5V2VhdGhlcihteVdlYXRoZXIpO1xuICAvL2NvbnNvbGUubG9nKG15T2JqZWN0KTtcbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldFVzZXJJbnB1dCk7XG4iXSwic291cmNlUm9vdCI6IiJ9