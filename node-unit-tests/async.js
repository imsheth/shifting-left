const axios = require("axios");

const fetchData = async (query) => {
  const url = `https://hn.algolia.com/api/v3/search?query=${query}`;

  return await axios.get(url);
};

module.exports = fetchData;
