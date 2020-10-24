module.exports = {
  serverAPI: {
    // eslint-disable-next-line prettier/prettier
    BASE_URL: `${process.env.VUE_APP_SERVER_HOST || "http://localhost"}:${process.env.VUE_APP_SERVER_PORT || 3000}`,
  },
};
