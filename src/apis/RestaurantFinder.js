import axios from "axios";
const { REACT_APP_BACKEND_URL } = process.env;

export default axios.create({
  baseURL: REACT_APP_BACKEND_URL || "http://localhost:3001/api/v1/restaurants/"
});

//console.log(something)