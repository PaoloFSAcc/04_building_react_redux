const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpacl-plugin");

process.env.NODE_ENV = "development";

module.exports = {
    mode: "development",
    target: "web",
    devTool: "cheap-module-source-map", //see code in browser
    entry: "./src/index",
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "bundle.js",
    },
    devServer: {
        stats: "minimal",
        overlay: true,
        historyApiFallback: true,
        disableHostcheck: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        https: false,
    },
    plugin: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            favicon: "src/favicon.ico",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"],
            },
            {
                test: /(\.css)$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
