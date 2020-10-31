const axios = require("./axios");

exports.getClassrooms = token => {
  return axios.get("/api/classroom", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
