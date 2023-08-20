import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.nasa.gov/neo/rest/v1",
});

export default instance;
