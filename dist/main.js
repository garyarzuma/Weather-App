/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
async function getWeather(city) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fdadea7e4878d60da4eee4280c0d280a&units=imperial`
  );
  const weather = await response.json();
  console.log(weather.main.temp);
  return weather.main.temp;
}

getWeather("Irvine");
//const weather = await getWeather("Irvine");
//console.log(weather);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBLHdEQUF3RCxLQUFLO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9ZmRhZGVhN2U0ODc4ZDYwZGE0ZWVlNDI4MGMwZDI4MGEmdW5pdHM9aW1wZXJpYWxgXG4gICk7XG4gIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXIubWFpbi50ZW1wKTtcbiAgcmV0dXJuIHdlYXRoZXIubWFpbi50ZW1wO1xufVxuXG5nZXRXZWF0aGVyKFwiSXJ2aW5lXCIpO1xuLy9jb25zdCB3ZWF0aGVyID0gYXdhaXQgZ2V0V2VhdGhlcihcIklydmluZVwiKTtcbi8vY29uc29sZS5sb2cod2VhdGhlcik7XG4iXSwic291cmNlUm9vdCI6IiJ9