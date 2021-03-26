import moment from "moment";

function transformCoinData({ data }) {
  const convertedData = data["prices"]
    .filter((item, index) => index % 10 === 0)
    .map((item) => ({
      date: moment(new Date(item[0])).format("LT"),
      price: item[1],
    }));
  console.log(convertedData, "data");
  return convertedData;
}

export default transformCoinData;
