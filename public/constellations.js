const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function updateIfExists(id, body) {
  const axios = require("../utils/axios");
  const BASE_URL = "http://localhost:5000";
  const url = `${BASE_URL}/constellations/${id}`;
  return axios
    .get(url)
    .then(()=> { return axios.put(url, body) 
      .then(({ data }) => { return data;}); 
               })
    .catch((error) => {
     return (error.message);
    });
}