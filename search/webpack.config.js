const path = require("path");
// const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const  ModuleFederationPlugin  =  require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require('webpack')

const packageJson = require('./package.json');
const deps = packageJson.dependencies;

let mode = "development";   // development or production
let target = "web";  // web or node
console.log('process.env.NODE_ENV----', process.env.NODE_ENV)
if (process.env.NODE_ENV === "production") {
  mode = "production";
  // target = "browserslist";
}

module.exports = {
  mode: mode,
  entry: "./src/index.js",
  output: {
    // output path is required for `clean-webpack-plugin`
    path: path.resolve(__dirname, "dist"),
    // this places all images processed in an image folder
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // This is required for asset imports in CSS, such as url()
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  plugins: [
    new  ModuleFederationPlugin({
      name: "Search",
      // library: {type: 'var', name : "Search" },
      filename: 'remoteEntry.js',
      // remotes: {
      //   search: 'search'
      // },
      exposes: {
        // "./SearchByItem": "./src/components/SearchByItem/SearchByItem.js" 
        "./App": "./src/index.js" 
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
          // import: "react", // the "react" package will be used a provided and fallback module
          // shareKey: "react", // under this name the shared module will be placed in the share scope
          // shareScope: "default", // share scope with this name will be used
          // eager: true
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
          // eager: true
        },
        'react-redux':{
          singleton: true,
          requiredVersion: deps['react-redux'],
          // eager: true
        },
        'redux-saga':{
          singleton: true,
          requiredVersion: deps['redux-saga'],
          // eager: true
        },
        'redux':{
          singleton: true,
          requiredVersion: deps['redux'],
          // eager: true
        },
        'redux-devtools-extension/developmentOnly':{
          singleton: true,
          requiredVersion: deps['redux-devtools-extension/developmentOnly'],
          // eager: true
        },
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  target: target,

  devtool: "source-map",  // devtool: false || source-map || 

  resolve: {
    extensions: [".js", ".jsx"],
  },

  // required if using webpack-dev-server
  devServer: {
    contentBase: "./dist",
    setup: function (app, server) {
      app.get('/some/path', function (req, res) {
        res.json({ custom: 'response' });
      });
    },
    port: 4001,
    historyApiFallback: true, // react-router-dom works with this
    hot: true,   // hot reloading
  },
};