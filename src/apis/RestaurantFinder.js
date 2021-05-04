import axios from "axios";

export default axios.create({
  baseURL: "https://food-finder-client-jdvesnlvc-kevdev90.vercel.app/api/v1/restaurants",
});