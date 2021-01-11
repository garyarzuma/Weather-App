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
    const weatherObject = {};
    weatherObject.name = tempObject.name;
    weatherObject.country = tempObject.sys.country;
    weatherObject.description = tempObject.weather[0].description;
    weatherObject.temp = tempObject.main.temp;
    weatherObject.feelsLike = tempObject.main.feels_like;

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
//document.getElementById("submit").addEventListener("click", getUserInput);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsMERBQTBELEtBQUs7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGFBQWEsSUFBSSxnQkFBZ0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPWZkYWRlYTdlNDg3OGQ2MGRhNGVlZTQyODBjMGQyODBhJnVuaXRzPWltcGVyaWFsYFxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlckpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSA0MDQpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzSlNPTih3ZWF0aGVySlNPTik7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIkxvY2F0aW9uIG5vdCBmb3VuZCFcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIGhhbmRsZUVycm9yKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0pTT04od2VhdGhlckpTT04pIHtcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0T2JqZWN0KHByb2Nlc3NKU09OKSB7XG4gICAgdGVtcE9iamVjdCA9IGF3YWl0IHByb2Nlc3NKU09OO1xuICAgIGNvbnN0IHdlYXRoZXJPYmplY3QgPSB7fTtcbiAgICB3ZWF0aGVyT2JqZWN0Lm5hbWUgPSB0ZW1wT2JqZWN0Lm5hbWU7XG4gICAgd2VhdGhlck9iamVjdC5jb3VudHJ5ID0gdGVtcE9iamVjdC5zeXMuY291bnRyeTtcbiAgICB3ZWF0aGVyT2JqZWN0LmRlc2NyaXB0aW9uID0gdGVtcE9iamVjdC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIHdlYXRoZXJPYmplY3QudGVtcCA9IHRlbXBPYmplY3QubWFpbi50ZW1wO1xuICAgIHdlYXRoZXJPYmplY3QuZmVlbHNMaWtlID0gdGVtcE9iamVjdC5tYWluLmZlZWxzX2xpa2U7XG5cbiAgICByZXR1cm4gd2VhdGhlck9iamVjdDtcbiAgfVxuICBjb25zdCB3ZWF0aGVyT2JqZWN0ID0gZ2V0T2JqZWN0KHdlYXRoZXJKU09OKTtcblxuICByZXR1cm4gd2VhdGhlck9iamVjdDtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gIGNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJDb250YWluZXJcIik7XG4gIGNvbnN0IG15RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbXlEaXYuY2xhc3NOYW1lID0gXCJlcnJvclwiO1xuICBteURpdi50ZXh0Q29udGVudCA9IFwiTG9jYXRpb24gbm90IGZvdW5kIVwiO1xuICB3ZWF0aGVyQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7IC8vY2xlYXIgY3VycmVudCBjb250ZW50c1xuICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG15RGl2KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIod2VhdGhlck9iamVjdCkge1xuICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyQ29udGFpbmVyXCIpO1xuICB3ZWF0aGVyQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7IC8vY2xlYXIgY29udGVudHNcbiAgd2VhdGhlck9iamVjdC50aGVuKCh3ZWF0aGVyKSA9PiB7XG4gICAgLy93YWl0cyB1bnRpbCB3ZWF0aGVyT2JqZWN0IGlzIHJlc29sdmVkIFRIRU4gZGlzcGxheXMgdGhlIGRpdlxuICAgIGZvciAoY29uc3QgbXlLZXkgaW4gd2VhdGhlcikge1xuICAgICAgY29uc3QgbXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbXlEaXYuY2xhc3NOYW1lID0gbXlLZXk7XG4gICAgICBzd2l0Y2ggKG15S2V5KSB7XG4gICAgICAgIGNhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgbXlEaXYudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLm5hbWV9LCAke3dlYXRoZXIuY291bnRyeX1gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZGVzY3JpcHRpb25cIjpcbiAgICAgICAgICBteURpdi50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICB3ZWF0aGVyW215S2V5XS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdlYXRoZXJbbXlLZXldLnNsaWNlKDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwidGVtcFwiOlxuICAgICAgICAgIG15RGl2LnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCh3ZWF0aGVyW215S2V5XSkgKyBcIlxcdTAwQjBGXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJmZWVsc0xpa2VcIjpcbiAgICAgICAgICBteURpdi50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBcIkZlZWxzIGxpa2U6IFwiICsgTWF0aC5yb3VuZCh3ZWF0aGVyW215S2V5XSkgKyBcIlxcdTAwQjBGXCI7XG4gICAgICB9XG4gICAgICBpZiAobXlLZXkgIT09IFwiY291bnRyeVwiKSB7XG4gICAgICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobXlEaXYpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJJbnB1dCgpIHtcbiAgY29uc3QgbXlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VySW5wdXRcIik7XG4gIGNvbnN0IG15TG9jYXRpb24gPSBteUZvcm0udmFsdWU7XG4gIGNvbnN0IG15V2VhdGhlciA9IGdldFdlYXRoZXIobXlMb2NhdGlvbik7IC8vYSBwcm9taXNlXG4gIGRpc3BsYXlXZWF0aGVyKG15V2VhdGhlcik7XG4gIC8vY29uc29sZS5sb2cobXlPYmplY3QpO1xufVxuXG4vL2V2ZW50IGxpc3RlbmVycyBmb3IgY2xpY2tpbmcgb24gRmluZCBhbmQgcHJlc3NpbmcgZW50ZXIgd2hlbiBpbiB0ZXh0Ym94XG4vL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXRVc2VySW5wdXQpO1xuZG9jdW1lbnRcbiAgLmdldEVsZW1lbnRCeUlkKFwidXNlcklucHV0XCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGdldFVzZXJJbnB1dCgpO1xuICAgIH1cbiAgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9