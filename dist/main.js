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
    processJSON(weatherJSON);
  } catch (error) {
    console.log(error);
    //handleError();
  }
}

function processJSON(weatherJSON) {
  let weatherObject = {};
  //resolve a promise into an object
  async function getObject(processJSON) {
    tempObject = await processJSON;
    weatherObject["name"] = tempObject.name;
    weatherObject["country"] = tempObject.sys.country;
    weatherObject["description"] = (tempObject.weather[0].description);
    weatherObject["temp"] = tempObject.main.temp;
    weatherObject["maxTemp"] = tempObject.main.temp_max;
    weatherObject["minTemp"] = tempObject.main.temp_min;
    weatherObject["feelsLike"] = tempObject.main.feels_like;
  }

  getObject(weatherJSON);
  console.log(weatherObject);
  return weatherObject;
}

function getUserInput(){
  const myForm = document.getElementById("userInput");
  const myLocation = myForm.value;
  const myWeather = getWeather(myLocation);
}

document.getElementById("submit").addEventListener("click", getUserInput);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsMERBQTBELEtBQUs7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9ZmRhZGVhN2U0ODc4ZDYwZGE0ZWVlNDI4MGMwZDI4MGEmdW5pdHM9aW1wZXJpYWxgXG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVySlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBwcm9jZXNzSlNPTih3ZWF0aGVySlNPTik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vaGFuZGxlRXJyb3IoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcm9jZXNzSlNPTih3ZWF0aGVySlNPTikge1xuICBsZXQgd2VhdGhlck9iamVjdCA9IHt9O1xuICAvL3Jlc29sdmUgYSBwcm9taXNlIGludG8gYW4gb2JqZWN0XG4gIGFzeW5jIGZ1bmN0aW9uIGdldE9iamVjdChwcm9jZXNzSlNPTikge1xuICAgIHRlbXBPYmplY3QgPSBhd2FpdCBwcm9jZXNzSlNPTjtcbiAgICB3ZWF0aGVyT2JqZWN0W1wibmFtZVwiXSA9IHRlbXBPYmplY3QubmFtZTtcbiAgICB3ZWF0aGVyT2JqZWN0W1wiY291bnRyeVwiXSA9IHRlbXBPYmplY3Quc3lzLmNvdW50cnk7XG4gICAgd2VhdGhlck9iamVjdFtcImRlc2NyaXB0aW9uXCJdID0gKHRlbXBPYmplY3Qud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XG4gICAgd2VhdGhlck9iamVjdFtcInRlbXBcIl0gPSB0ZW1wT2JqZWN0Lm1haW4udGVtcDtcbiAgICB3ZWF0aGVyT2JqZWN0W1wibWF4VGVtcFwiXSA9IHRlbXBPYmplY3QubWFpbi50ZW1wX21heDtcbiAgICB3ZWF0aGVyT2JqZWN0W1wibWluVGVtcFwiXSA9IHRlbXBPYmplY3QubWFpbi50ZW1wX21pbjtcbiAgICB3ZWF0aGVyT2JqZWN0W1wiZmVlbHNMaWtlXCJdID0gdGVtcE9iamVjdC5tYWluLmZlZWxzX2xpa2U7XG4gIH1cblxuICBnZXRPYmplY3Qod2VhdGhlckpTT04pO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyT2JqZWN0KTtcbiAgcmV0dXJuIHdlYXRoZXJPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJJbnB1dCgpe1xuICBjb25zdCBteUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJJbnB1dFwiKTtcbiAgY29uc3QgbXlMb2NhdGlvbiA9IG15Rm9ybS52YWx1ZTtcbiAgY29uc3QgbXlXZWF0aGVyID0gZ2V0V2VhdGhlcihteUxvY2F0aW9uKTtcbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldFVzZXJJbnB1dCk7XG4iXSwic291cmNlUm9vdCI6IiJ9