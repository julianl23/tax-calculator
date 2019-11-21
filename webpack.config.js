const webpack = require("webpack");
const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["react-hot-loader/patch", path.resolve(__dirname, "./src/index.jsx")],
  devtool: "cheap-module-source-map",
  mode: "none",
  output: {
    filename: "index.js",
    publicPath: "/public/",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: { "react-dom": "@hot-loader/react-dom" },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    // headers: { "Access-Control-Allow-Origin": "*" },
    // historyApiFallback: true,
    // contentBase: path.join(__dirname, "public/"),
    // port: 3000,
    // publicPath: "http://localhost:3000/public/",
    // hotOnly: true,
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/",
    hotOnly: true,
  },
};
