import displayToDom from "./displayToDom";

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
      displayToDom.handleError();
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

export default weatherAPIcall;
