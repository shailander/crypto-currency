import axios from "axios";

axios.defaults.baseURL = "https://api.coingecko.com/api/v3/coins";

function getData() {
  return axios.get("/markets?vs_currency=INR").then((res) => res.data);
}

function getDayData(id) {
  return axios.get(`${id}/market_chart?vs_currency=INR&days=1`);
}

export default { getData, getDayData };
