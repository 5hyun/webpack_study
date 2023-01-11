var path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  // webpack을 entry 있는 파일을 대상으 돌려서 output(결과물)을 내는 것
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
};
