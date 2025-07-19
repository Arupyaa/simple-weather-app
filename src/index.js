import { Api } from "./API.js";

const searchBar = document.querySelector("input");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = Api.grabData(searchBar.value);
  data.then((obj) => {
    if (obj.success) console.log(obj);
  });
});
