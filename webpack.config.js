const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    "root-application": "root-application.js"
  },
  output: {
    publicPath: "/dist/",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader"
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  node: {
    fs: "empty"
  },
  resolve: {
    modules: [__dirname, "node_modules"]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"]
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(
          __dirname,
          "node_modules/single-spa-layout-app/dist/img"
        ),
        to: path.resolve(__dirname, "dist/img")
      }
    ])
  ],
  devtool: "source-map",
  externals: [],
  devServer: {
    historyApiFallback: true,
    writeToDisk: true
  }
};
