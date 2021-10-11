import axios from "axios";

console.log(process.env.REACT_APP_YOUTUBE_API);
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCIgWoAfy7D7TIotuPHjQ4M6yw2FM0yGf0",
  },
});

export default request;
