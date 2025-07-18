import { Api } from "./API.js";

let data = Api.grabData("cairo");
data.then((obj) => {
  if (obj.success) console.log(obj);
});
