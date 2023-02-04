let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌 => 일일히 css 같은 것을 적을 필요가 없음
      // 만약 index.html이 없으면 새로 생성해 줌 => 결국 index.html을 돌리기만 하면 웹팩의 결과가 다 들어가 있게 해주는 플러그인이다.
      template: "index.html",
    }),
  ],
};
