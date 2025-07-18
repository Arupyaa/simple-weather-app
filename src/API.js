export { Api };

let Api = (function () {
  let grabData = async function (location) {
    try {
      const url =
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        location +
        "?unitGroup=metric&key=4MP5KZSG26GT2XSDUKZ9LDN7H&contentType=json";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const responsePromise = await response.json();
      /* console.log(responsePromise); */
      let returned = {
        success: true,
        location: responsePromise.resolvedAddress,
        temp: responsePromise.currentConditions.temp,
        feelslike: responsePromise.currentConditions.feelslike,
        humidity: responsePromise.currentConditions.humidity,
        precip: responsePromise.currentConditions.precip,
        icon: responsePromise.currentConditions.icon,
      };
      return returned;
    } catch (error) {
      console.error(error.message);
      return { success: false };
    }
  };

  return { grabData };
})();
