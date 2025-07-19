export { UI };
import clearDay from "./icons/clear-day.svg";
import clearNight from "./icons/clear-night.svg";
import cloudy from "./icons/cloudy.svg";
import fog from "./icons/fog.svg";
import hail from "./icons/hail.svg";
import partlyCloudyDay from "./icons/partly-cloudy-day.svg";
import partlyCloudyNight from "./icons/partly-cloudy-night.svg";
import rainSnowShowersDay from "./icons/rain-snow-showers-day.svg";
import rainSnowShowersNight from "./icons/rain-snow-showers-night.svg";
import rainSnow from "./icons/rain-snow.svg";
import rain from "./icons/rain.svg";
import showersDay from "./icons/showers-day.svg";
import showersNight from "./icons/showers-night.svg";
import sleet from "./icons/sleet.svg";
import snowShowersDay from "./icons/snow-showers-day.svg";
import snowShowersNight from "./icons/snow-showers-night.svg";
import snow from "./icons/snow.svg";
import thunderRain from "./icons/thunder-rain.svg";
import thunderShowersDay from "./icons/thunder-showers-day.svg";
import thunderShowersNight from "./icons/thunder-showers-night.svg";
import thunder from "./icons/thunder.svg";
import wind from "./icons/wind.svg";

const UI = (function () {
  const tempUI = document.querySelector(".temp");
  const locationUI = document.querySelector(".location");
  const iconUI = document.querySelector(".icon");
  const humidityUI = document.querySelector(".humidity");
  const feelslikeUI = document.querySelector(".feelslike");
  const precipUI = document.querySelector(".precip");
  const errorUI = document.querySelector(".error");

  const dataHandler = async function (data) {
    let dataObj = await data;
    if (!dataObj.success) {
      errorUI.classList.remove("hidden");
      tempUI.classList.add("hidden");
      locationUI.classList.add("hidden");
      iconUI.classList.add("hidden");
      humidityUI.classList.add("hidden");
      feelslikeUI.classList.add("hidden");
      precipUI.classList.add("hidden");
      errorUI.textContent =
        "failed to retrieve data, please enter a valid location";
      return;
    } else {
      errorUI.classList.add("hidden");
      tempUI.classList.remove("hidden");
      locationUI.classList.remove("hidden");
      iconUI.classList.remove("hidden");
      humidityUI.classList.remove("hidden");
      feelslikeUI.classList.remove("hidden");
      precipUI.classList.remove("hidden");
    }
    tempUI.textContent = dataObj.temp;
    locationUI.textContent = dataObj.location;
    feelslikeUI.textContent = "feels like: " + dataObj.feelslike;
    humidityUI.textContent = "humidity: " + dataObj.humidity;
    precipUI.textContent = "precip: " + dataObj.precip;
    addIcon(dataObj.icon);
  };

  function addIcon(icon) {
    switch (icon) {
      case "clear-day":
        iconUI.src = clearDay;
        break;
      case "clear-night":
        iconUI.src = clearNight;
        break;
      case "cloudy":
        iconUI.src = cloudy;
        break;
      case "fog":
        iconUI.src = fog;
        break;
      case "hail":
        iconUI.src = hail;
        break;
      case "partly-cloudy-day":
        iconUI.src = partlyCloudyDay;
        break;
      case "partly-cloudy-night":
        iconUI.src = partlyCloudyNight;
        break;
      case "rain-snow-showers-day":
        iconUI.src = rainSnowShowersDay;
        break;
      case "rain-snow-showers-night":
        iconUI.src = rainSnowShowersNight;
        break;
      case "rain-snow":
        iconUI.src = rainSnow;
        break;
      case "rain":
        iconUI.src = rain;
        break;
      case "showers-day":
        iconUI.src = showersDay;
        break;
      case "showers-night":
        iconUI.src = showersNight;
        break;
      case "sleet":
        iconUI.src = sleet;
        break;
      case "snow-showers-day":
        iconUI.src = snowShowersDay;
        break;
      case "snow-showers-night":
        iconUI.src = snowShowersNight;
        break;
      case "snow":
        iconUI.src = snow;
        break;
      case "thunder-rain":
        iconUI.src = thunderRain;
        break;
      case "thunder-showers-day":
        iconUI.src = thunderShowersDay;
        break;
      case "thunder-showers-night":
        iconUI.src = thunderShowersNight;
        break;
      case "thunder":
        iconUI.src = thunder;
        break;
      case "wind":
        iconUI.src = wind;
        break;
      default:
        iconUI.src = clearDay; // Default icon if none match
        break;
    }
  }
  return { dataHandler };
})();
