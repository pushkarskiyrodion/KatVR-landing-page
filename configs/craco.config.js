const cracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        baseUrl: "./src",
        source: "jsconfig",
      },
    },
  ],
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
        @import "./src/styles/shared.scss";
        `,
      },
    },
  },
};
