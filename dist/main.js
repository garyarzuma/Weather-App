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
    return weatherJSON;
  } catch (error) {
    console.log(error);
  }
}

function processJSON(weatherJSON) {
  let weatherObject = {};
  //resolve a promise into an object
  async function getObject(processJSON) {
    tempObject = await processJSON;
    weatherObject["name"] = tempObject.name;
    weatherObject["country"] = tempObject.sys.country;
    weatherObject["description"] = tempObject.weather[0].description;
    weatherObject["temp"] = tempObject.main.temp;
    weatherObject["maxTemp"] = tempObject.main.temp_max;
    weatherObject["minTemp"] = tempObject.main.temp_min;
    weatherObject["feelsLike"] = tempObject.main.feels_like;
  }

  getObject(weatherJSON);
  return weatherObject;
}

console.log(processJSON(getWeather("Irvine")));
//console.log(weather);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsMERBQTBELEtBQUs7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD1mZGFkZWE3ZTQ4NzhkNjBkYTRlZWU0MjgwYzBkMjgwYSZ1bml0cz1pbXBlcmlhbGBcbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVySlNPTjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0pTT04od2VhdGhlckpTT04pIHtcbiAgbGV0IHdlYXRoZXJPYmplY3QgPSB7fTtcbiAgLy9yZXNvbHZlIGEgcHJvbWlzZSBpbnRvIGFuIG9iamVjdFxuICBhc3luYyBmdW5jdGlvbiBnZXRPYmplY3QocHJvY2Vzc0pTT04pIHtcbiAgICB0ZW1wT2JqZWN0ID0gYXdhaXQgcHJvY2Vzc0pTT047XG4gICAgd2VhdGhlck9iamVjdFtcIm5hbWVcIl0gPSB0ZW1wT2JqZWN0Lm5hbWU7XG4gICAgd2VhdGhlck9iamVjdFtcImNvdW50cnlcIl0gPSB0ZW1wT2JqZWN0LnN5cy5jb3VudHJ5O1xuICAgIHdlYXRoZXJPYmplY3RbXCJkZXNjcmlwdGlvblwiXSA9IHRlbXBPYmplY3Qud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICB3ZWF0aGVyT2JqZWN0W1widGVtcFwiXSA9IHRlbXBPYmplY3QubWFpbi50ZW1wO1xuICAgIHdlYXRoZXJPYmplY3RbXCJtYXhUZW1wXCJdID0gdGVtcE9iamVjdC5tYWluLnRlbXBfbWF4O1xuICAgIHdlYXRoZXJPYmplY3RbXCJtaW5UZW1wXCJdID0gdGVtcE9iamVjdC5tYWluLnRlbXBfbWluO1xuICAgIHdlYXRoZXJPYmplY3RbXCJmZWVsc0xpa2VcIl0gPSB0ZW1wT2JqZWN0Lm1haW4uZmVlbHNfbGlrZTtcbiAgfVxuXG4gIGdldE9iamVjdCh3ZWF0aGVySlNPTik7XG4gIHJldHVybiB3ZWF0aGVyT2JqZWN0O1xufVxuXG5jb25zb2xlLmxvZyhwcm9jZXNzSlNPTihnZXRXZWF0aGVyKFwiSXJ2aW5lXCIpKSk7XG4vL2NvbnNvbGUubG9nKHdlYXRoZXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==