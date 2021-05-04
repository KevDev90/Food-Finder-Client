import axios from "axios";

export default axios.create({
  baseURL: "https://fantastic-food-finder.herokuapp.com/api/v1/restaurants",
});