/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayToDom.js":
/*!*****************************!*\
  !*** ./src/displayToDom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const displayToDom = (() => {
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
            let myDiv = document.createElement("div");
            myDiv.className = myKey;
            myDiv.textContent = `${weather.name}, ${weather.country}`;
            infoContainer.appendChild(myDiv);
            break;
          case "description":
            let myDiv2 = document.createElement("div");
            myDiv2.className = myKey;
            myDiv2.textContent =
              weather[myKey].charAt(0).toUpperCase() + weather[myKey].slice(1);
            infoContainer.appendChild(myDiv2);
            break;
          case "temp":
            let myDiv3 = document.createElement("div");
            myDiv3.className = myKey;
            myDiv3.textContent =
              Math.round(weather[myKey]) +
              "\u00B0" +
              document.querySelector(".units").id;
            weatherContainer.appendChild(myDiv3);
            break;
          case "feelsLike":
            let myDiv4 = document.createElement("div");
            myDiv4.className = myKey;
            myDiv4.textContent =
              "Feels like: " +
              Math.round(weather[myKey]) +
              "\u00B0" +
              document.querySelector(".units").id;
            infoContainer.appendChild(myDiv4);
            break;
          case "icon":
            addIcon(weather[myKey]);
            break;
        }
      }
    });
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

  //adds the weather icon with an api call
  function addIcon(icon) {
    const imgSRC = `http://openweathermap.org/img/wn/${icon}@4x.png`;
    document.querySelector("img").src = imgSRC;
  }

  function changeUnit() {
    const myUnit = document.querySelector(".units");
    myUnit.id = myUnit.id === "F" ? "C" : "F"; //toggles celsius and farenheit
    myUnit.innerHTML = myUnit.id === "F" ? "&#8457;" : "&#8451;";
  }

  return { changeUnit, displayWeather, handleError };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayToDom);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weatherAPIcall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherAPIcall */ "./src/weatherAPIcall.js");
/* harmony import */ var _displayToDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayToDom */ "./src/displayToDom.js");



const index = (() => {
  //main app call that will get the from value and whether to use F or C and then use getWeather to call the API and displayWeather to show on Dom
  function getUserInput() {
    const myForm = document.getElementById("userInput");
    const myLocation = myForm.value;
    const myUnitId = document.querySelector(".units").id;
    const myUnit = myUnitId === "F" ? "imperial" : "metric";
    const myWeather = _weatherAPIcall__WEBPACK_IMPORTED_MODULE_0__.default.getWeather(myLocation, myUnit); //a promise
    _displayToDom__WEBPACK_IMPORTED_MODULE_1__.default.displayWeather(myWeather);
  }

  //event listeners for F to C button and when pressing enter on search box
  document
    .querySelector(".units")
    .addEventListener("click", _displayToDom__WEBPACK_IMPORTED_MODULE_1__.default.changeUnit);

  document
    .getElementById("userInput")
    .addEventListener("keyup", function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        getUserInput();
      }
    });
})();


/***/ }),

/***/ "./src/weatherAPIcall.js":
/*!*******************************!*\
  !*** ./src/weatherAPIcall.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _displayToDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayToDom */ "./src/displayToDom.js");


const weatherAPIcall = (() => {
  async function getWeather(city, unit) {
    try {
      const response = await fetch(
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
      _displayToDom__WEBPACK_IMPORTED_MODULE_0__.default.handleError();
    }
  }

  //creates actual object with just information we need from the api call
  function processJSON(weatherJSON) {
    async function getObject(processJSON) {
      const tempObject = await processJSON;
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

  return { getWeather };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherAPIcall);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5VG9Eb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlckFQSWNhbGwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGFBQWEsSUFBSSxnQkFBZ0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxpQ0FBaUM7QUFDakM7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxLQUFLO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QztBQUM5QyxtREFBbUQsWUFBWTtBQUMvRDs7QUFFQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFRCxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7O0FDN0VrQjtBQUNKOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrREFBeUIscUJBQXFCO0FBQ3BFLElBQUksaUVBQTJCO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw2REFBdUI7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQnlDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxLQUFLLGdEQUFnRCxLQUFLO0FBQ3ZILFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxNQUFNLDhEQUF3QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWLENBQUM7O0FBRUQsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7O1VDMUM5QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRpc3BsYXlUb0RvbSA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKHdlYXRoZXJPYmplY3QpIHtcbiAgICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wXCIpO1xuICAgIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9cIik7XG4gICAgY29uc3QgbXlFcnJvckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIik7XG4gICAgbXlFcnJvckRpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHdlYXRoZXJDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjsgLy9jbGVhciBjb250ZW50c1xuICAgIGluZm9Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjsgLy9jbGVhciBjb250ZW50c1xuICAgIHdlYXRoZXJPYmplY3QudGhlbigod2VhdGhlcikgPT4ge1xuICAgICAgLy93YWl0cyB1bnRpbCB3ZWF0aGVyT2JqZWN0IGlzIHJlc29sdmVkIFRIRU4gZGlzcGxheXMgdGhlIGRpdlxuICAgICAgZm9yIChjb25zdCBteUtleSBpbiB3ZWF0aGVyKSB7XG4gICAgICAgIHN3aXRjaCAobXlLZXkpIHtcbiAgICAgICAgICBjYXNlIFwibmFtZVwiOlxuICAgICAgICAgICAgbGV0IG15RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG15RGl2LmNsYXNzTmFtZSA9IG15S2V5O1xuICAgICAgICAgICAgbXlEaXYudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLm5hbWV9LCAke3dlYXRoZXIuY291bnRyeX1gO1xuICAgICAgICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChteURpdik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiZGVzY3JpcHRpb25cIjpcbiAgICAgICAgICAgIGxldCBteURpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbXlEaXYyLmNsYXNzTmFtZSA9IG15S2V5O1xuICAgICAgICAgICAgbXlEaXYyLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgd2VhdGhlcltteUtleV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3ZWF0aGVyW215S2V5XS5zbGljZSgxKTtcbiAgICAgICAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobXlEaXYyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJ0ZW1wXCI6XG4gICAgICAgICAgICBsZXQgbXlEaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG15RGl2My5jbGFzc05hbWUgPSBteUtleTtcbiAgICAgICAgICAgIG15RGl2My50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgIE1hdGgucm91bmQod2VhdGhlcltteUtleV0pICtcbiAgICAgICAgICAgICAgXCJcXHUwMEIwXCIgK1xuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVuaXRzXCIpLmlkO1xuICAgICAgICAgICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChteURpdjMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImZlZWxzTGlrZVwiOlxuICAgICAgICAgICAgbGV0IG15RGl2NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBteURpdjQuY2xhc3NOYW1lID0gbXlLZXk7XG4gICAgICAgICAgICBteURpdjQudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICBcIkZlZWxzIGxpa2U6IFwiICtcbiAgICAgICAgICAgICAgTWF0aC5yb3VuZCh3ZWF0aGVyW215S2V5XSkgK1xuICAgICAgICAgICAgICBcIlxcdTAwQjBcIiArXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdHNcIikuaWQ7XG4gICAgICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKG15RGl2NCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiaWNvblwiOlxuICAgICAgICAgICAgYWRkSWNvbih3ZWF0aGVyW215S2V5XSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcFwiKTtcbiAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpO1xuICAgIGNvbnN0IG15RXJyb3JEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikuc3JjID0gXCIjXCI7XG4gICAgbXlFcnJvckRpdi50ZXh0Q29udGVudCA9IFwiTG9jYXRpb24gbm90IGZvdW5kIVwiO1xuICAgIHdlYXRoZXJDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjsgLy9jbGVhciBjdXJyZW50IGNvbnRlbnRzXG4gICAgaW5mb0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiOyAvL2NsZWFyIGNvbnRlbnRzXG4gIH1cblxuICAvL2FkZHMgdGhlIHdlYXRoZXIgaWNvbiB3aXRoIGFuIGFwaSBjYWxsXG4gIGZ1bmN0aW9uIGFkZEljb24oaWNvbikge1xuICAgIGNvbnN0IGltZ1NSQyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb259QDR4LnBuZ2A7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImltZ1wiKS5zcmMgPSBpbWdTUkM7XG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VVbml0KCkge1xuICAgIGNvbnN0IG15VW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdHNcIik7XG4gICAgbXlVbml0LmlkID0gbXlVbml0LmlkID09PSBcIkZcIiA/IFwiQ1wiIDogXCJGXCI7IC8vdG9nZ2xlcyBjZWxzaXVzIGFuZCBmYXJlbmhlaXRcbiAgICBteVVuaXQuaW5uZXJIVE1MID0gbXlVbml0LmlkID09PSBcIkZcIiA/IFwiJiM4NDU3O1wiIDogXCImIzg0NTE7XCI7XG4gIH1cblxuICByZXR1cm4geyBjaGFuZ2VVbml0LCBkaXNwbGF5V2VhdGhlciwgaGFuZGxlRXJyb3IgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlUb0RvbTtcbiIsImltcG9ydCB3ZWF0aGVyQVBJY2FsbCBmcm9tIFwiLi93ZWF0aGVyQVBJY2FsbFwiO1xuaW1wb3J0IGRpc3BsYXlUb0RvbSBmcm9tIFwiLi9kaXNwbGF5VG9Eb21cIjtcblxuY29uc3QgaW5kZXggPSAoKCkgPT4ge1xuICAvL21haW4gYXBwIGNhbGwgdGhhdCB3aWxsIGdldCB0aGUgZnJvbSB2YWx1ZSBhbmQgd2hldGhlciB0byB1c2UgRiBvciBDIGFuZCB0aGVuIHVzZSBnZXRXZWF0aGVyIHRvIGNhbGwgdGhlIEFQSSBhbmQgZGlzcGxheVdlYXRoZXIgdG8gc2hvdyBvbiBEb21cbiAgZnVuY3Rpb24gZ2V0VXNlcklucHV0KCkge1xuICAgIGNvbnN0IG15Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcklucHV0XCIpO1xuICAgIGNvbnN0IG15TG9jYXRpb24gPSBteUZvcm0udmFsdWU7XG4gICAgY29uc3QgbXlVbml0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVuaXRzXCIpLmlkO1xuICAgIGNvbnN0IG15VW5pdCA9IG15VW5pdElkID09PSBcIkZcIiA/IFwiaW1wZXJpYWxcIiA6IFwibWV0cmljXCI7XG4gICAgY29uc3QgbXlXZWF0aGVyID0gd2VhdGhlckFQSWNhbGwuZ2V0V2VhdGhlcihteUxvY2F0aW9uLCBteVVuaXQpOyAvL2EgcHJvbWlzZVxuICAgIGRpc3BsYXlUb0RvbS5kaXNwbGF5V2VhdGhlcihteVdlYXRoZXIpO1xuICB9XG5cbiAgLy9ldmVudCBsaXN0ZW5lcnMgZm9yIEYgdG8gQyBidXR0b24gYW5kIHdoZW4gcHJlc3NpbmcgZW50ZXIgb24gc2VhcmNoIGJveFxuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnVuaXRzXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5VG9Eb20uY2hhbmdlVW5pdCk7XG5cbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VySW5wdXRcIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBnZXRVc2VySW5wdXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG4iLCJpbXBvcnQgZGlzcGxheVRvRG9tIGZyb20gXCIuL2Rpc3BsYXlUb0RvbVwiO1xuXG5jb25zdCB3ZWF0aGVyQVBJY2FsbCA9ICgoKSA9PiB7XG4gIGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSwgdW5pdCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPWZkYWRlYTdlNDg3OGQ2MGRhNGVlZTQyODBjMGQyODBhJnVuaXRzPSR7dW5pdH1gLFxuICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICAgICk7XG4gICAgICBjb25zdCB3ZWF0aGVySlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcHJvY2Vzc0pTT04od2VhdGhlckpTT04pO1xuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTG9jYXRpb24gbm90IGZvdW5kIVwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgZGlzcGxheVRvRG9tLmhhbmRsZUVycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgLy9jcmVhdGVzIGFjdHVhbCBvYmplY3Qgd2l0aCBqdXN0IGluZm9ybWF0aW9uIHdlIG5lZWQgZnJvbSB0aGUgYXBpIGNhbGxcbiAgZnVuY3Rpb24gcHJvY2Vzc0pTT04od2VhdGhlckpTT04pIHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRPYmplY3QocHJvY2Vzc0pTT04pIHtcbiAgICAgIGNvbnN0IHRlbXBPYmplY3QgPSBhd2FpdCBwcm9jZXNzSlNPTjtcbiAgICAgIGNvbnN0IHdlYXRoZXJPYmplY3QgPSB7fTtcbiAgICAgIHdlYXRoZXJPYmplY3QubmFtZSA9IHRlbXBPYmplY3QubmFtZTtcbiAgICAgIHdlYXRoZXJPYmplY3QuY291bnRyeSA9IHRlbXBPYmplY3Quc3lzLmNvdW50cnk7XG4gICAgICB3ZWF0aGVyT2JqZWN0LmRlc2NyaXB0aW9uID0gdGVtcE9iamVjdC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgd2VhdGhlck9iamVjdC50ZW1wID0gdGVtcE9iamVjdC5tYWluLnRlbXA7XG4gICAgICB3ZWF0aGVyT2JqZWN0LmZlZWxzTGlrZSA9IHRlbXBPYmplY3QubWFpbi5mZWVsc19saWtlO1xuICAgICAgd2VhdGhlck9iamVjdC5pY29uID0gdGVtcE9iamVjdC53ZWF0aGVyWzBdLmljb247XG5cbiAgICAgIHJldHVybiB3ZWF0aGVyT2JqZWN0O1xuICAgIH1cbiAgICBjb25zdCB3ZWF0aGVyT2JqZWN0ID0gZ2V0T2JqZWN0KHdlYXRoZXJKU09OKTtcblxuICAgIHJldHVybiB3ZWF0aGVyT2JqZWN0O1xuICB9XG5cbiAgcmV0dXJuIHsgZ2V0V2VhdGhlciB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlckFQSWNhbGw7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=