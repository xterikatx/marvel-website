import axios from "axios";
import MD5 from "crypto-js/md5";

const currentDate = new Date();
const TIMESTAMP = currentDate.getTime();

const HASH = MD5(
  `${TIMESTAMP}${process.env.REACT_APP_PRIVATE_KEY_API}${process.env.REACT_APP_PUBLIC_KEY_API}`
).toString();

const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/",
  params: {
    apikey: process.env.REACT_APP_PUBLIC_KEY_API,
    ts: TIMESTAMP,
    hash: HASH,
  },
});

export default api;
