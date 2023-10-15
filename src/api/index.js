import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "b6b0c7196fa251164ce626724d3e68e0",
    language: "en-US",
  },
});
