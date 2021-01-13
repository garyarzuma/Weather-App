import weatherAPIcall from "./weatherAPIcall";
import displayToDom from "./displayToDom";

const index = (() => {
  //main app call that will get the from value and whether to use F or C and then use getWeather to call the API and displayWeather to show on Dom
  function getUserInput() {
    const myForm = document.getElementById("userInput");
    const myLocation = myForm.value;
    const myUnitId = document.querySelector(".units").id;
    const myUnit = myUnitId === "F" ? "imperial" : "metric";
    const myWeather = weatherAPIcall.getWeather(myLocation, myUnit); //a promise
    displayToDom.displayWeather(myWeather);
  }

  //event listeners for F to C button and when pressing enter on search box
  document
    .querySelector(".units")
    .addEventListener("click", displayToDom.changeUnit);

  document
    .getElementById("userInput")
    .addEventListener("keyup", function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        getUserInput();
      }
    });
})();
