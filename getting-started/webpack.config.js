var path = require("path");

module.exports = {
  mode: "none",
  // 빌드의 대상 파일을 정의하는 것
  entry: "./src/index.js",
  // webpack을 entry 있는 파일을 대상으 돌려서 output(결과물)을 내는 것
  // 빌드을 하고, 즉 웹팩으로 변환을 하고나 나온 결과물의 정보를 저장하는 곳
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  // entry에서 output이 될 때 중간에 개입하는 것이 module
  module: {},
  devtool: "source-map",
};
