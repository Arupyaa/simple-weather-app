import { Api } from "./API.js";
import { UI } from "./UI.js";
import "./index.css";

const searchBar = document.querySelector("input");
const form = document.querySelector("form");

UI.UIinit();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = Api.grabData(searchBar.value);
  data.then((obj) => {
    if (obj.success) console.log(obj);
  });
  UI.dataHandler(data);
});
