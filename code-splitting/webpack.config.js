var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // mode에는 production, development, none으로 되어있다.
  // 배포할때는 항상 production을 써줘야한다.
  mode: "none",
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // 이것은 loader
  module: {
    rules: [
      {
        // 모든 css 확장자를 가진 파일에 use에 있는 loader를 적용하겠다라는 의미
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
      },
      //  모든 js 파일에 대해 babel을 돌리겠다는 의미
      // {
      //   test: /\.js$/,
      //   use: ["babel-loader"],
      // },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
