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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsMERBQTBELEtBQUs7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGFBQWEsSUFBSSxnQkFBZ0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPWZkYWRlYTdlNDg3OGQ2MGRhNGVlZTQyODBjMGQyODBhJnVuaXRzPWltcGVyaWFsYFxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlckpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSA0MDQpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzSlNPTih3ZWF0aGVySlNPTik7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIkxvY2F0aW9uIG5vdCBmb3VuZCFcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIGhhbmRsZUVycm9yKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0pTT04od2VhdGhlckpTT04pIHtcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0T2JqZWN0KHByb2Nlc3NKU09OKSB7XG4gICAgdGVtcE9iamVjdCA9IGF3YWl0IHByb2Nlc3NKU09OO1xuICAgIGNvbnNvbGUubG9nKHRlbXBPYmplY3QpO1xuICAgIGNvbnN0IHdlYXRoZXJPYmplY3QgPSB7fTtcbiAgICB3ZWF0aGVyT2JqZWN0Lm5hbWUgPSB0ZW1wT2JqZWN0Lm5hbWU7XG4gICAgd2VhdGhlck9iamVjdC5jb3VudHJ5ID0gdGVtcE9iamVjdC5zeXMuY291bnRyeTtcbiAgICB3ZWF0aGVyT2JqZWN0LmRlc2NyaXB0aW9uID0gdGVtcE9iamVjdC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIHdlYXRoZXJPYmplY3QudGVtcCA9IHRlbXBPYmplY3QubWFpbi50ZW1wO1xuICAgIHdlYXRoZXJPYmplY3QuZmVlbHNMaWtlID0gdGVtcE9iamVjdC5tYWluLmZlZWxzX2xpa2U7XG5cbiAgICByZXR1cm4gd2VhdGhlck9iamVjdDtcbiAgfVxuICBjb25zdCB3ZWF0aGVyT2JqZWN0ID0gZ2V0T2JqZWN0KHdlYXRoZXJKU09OKTtcbiAgd2VhdGhlck9iamVjdC50aGVuKChkKSA9PiBjb25zb2xlLmxvZyhkKSk7IC8vY2FuIGRlbGV0ZVxuXG4gIHJldHVybiB3ZWF0aGVyT2JqZWN0O1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlckNvbnRhaW5lclwiKTtcbiAgY29uc3QgbXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBteURpdi5jbGFzc05hbWUgPSBcImVycm9yXCI7XG4gIG15RGl2LnRleHRDb250ZW50ID0gXCJMb2NhdGlvbiBub3QgZm91bmQhXCI7XG4gIHdlYXRoZXJDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjsgLy9jbGVhciBjdXJyZW50IGNvbnRlbnRzXG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobXlEaXYpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlcih3ZWF0aGVyT2JqZWN0KSB7XG4gIGNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJDb250YWluZXJcIik7XG4gIHdlYXRoZXJDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjsgLy9jbGVhciBjb250ZW50c1xuICB3ZWF0aGVyT2JqZWN0LnRoZW4oKHdlYXRoZXIpID0+IHtcbiAgICAvL3dhaXRzIHVudGlsIHdlYXRoZXJPYmplY3QgaXMgcmVzb2x2ZWQgVEhFTiBkaXNwbGF5cyB0aGUgZGl2XG4gICAgZm9yIChjb25zdCBteUtleSBpbiB3ZWF0aGVyKSB7XG4gICAgICBjb25zdCBteURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBteURpdi5jbGFzc05hbWUgPSBteUtleTtcbiAgICAgIHN3aXRjaCAobXlLZXkpIHtcbiAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICBteURpdi50ZXh0Q29udGVudCA9IGAke3dlYXRoZXIubmFtZX0sICR7d2VhdGhlci5jb3VudHJ5fWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJkZXNjcmlwdGlvblwiOlxuICAgICAgICAgIG15RGl2LnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIHdlYXRoZXJbbXlLZXldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2VhdGhlcltteUtleV0uc2xpY2UoMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ0ZW1wXCI6XG4gICAgICAgICAgbXlEaXYudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHdlYXRoZXJbbXlLZXldKSArIFwiXFx1MDBCMEZcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImZlZWxzTGlrZVwiOlxuICAgICAgICAgIG15RGl2LnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIFwiRmVlbHMgbGlrZTogXCIgKyBNYXRoLnJvdW5kKHdlYXRoZXJbbXlLZXldKSArIFwiXFx1MDBCMEZcIjtcbiAgICAgIH1cbiAgICAgIGlmIChteUtleSAhPT0gXCJjb3VudHJ5XCIpIHtcbiAgICAgICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChteURpdik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlcklucHV0KCkge1xuICBjb25zdCBteUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJJbnB1dFwiKTtcbiAgY29uc3QgbXlMb2NhdGlvbiA9IG15Rm9ybS52YWx1ZTtcbiAgY29uc3QgbXlXZWF0aGVyID0gZ2V0V2VhdGhlcihteUxvY2F0aW9uKTsgLy9hIHByb21pc2VcbiAgZGlzcGxheVdlYXRoZXIobXlXZWF0aGVyKTtcbiAgLy9jb25zb2xlLmxvZyhteU9iamVjdCk7XG59XG5cbi8vZXZlbnQgbGlzdGVuZXJzIGZvciBjbGlja2luZyBvbiBGaW5kIGFuZCBwcmVzc2luZyBlbnRlciB3aGVuIGluIHRleHRib3hcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXRVc2VySW5wdXQpO1xuZG9jdW1lbnRcbiAgLmdldEVsZW1lbnRCeUlkKFwidXNlcklucHV0XCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGdldFVzZXJJbnB1dCgpO1xuICAgIH1cbiAgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9