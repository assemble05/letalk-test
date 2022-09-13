import axios from "axios";

const local = axios.create({ baseURL: "http://localhost:3001/" });

const api = axios.create({ baseURL: "https://api-letalk-test.herokuapp.com/" });

export { api, local };
