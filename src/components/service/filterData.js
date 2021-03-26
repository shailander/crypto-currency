function filterData(usersList, keyword) {
  var re = new RegExp(keyword, "i");

  const newData = usersList.filter((item) => item["name"].match(re) !== null);
  return newData;
}

export default filterData;
