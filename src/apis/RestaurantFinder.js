import axios from "axios";

export default axios.create({
  baseURL: "https://fantastic-food-finder.herokuapp.com:3001/api/v1/restaurants",
});

//console.log(something)