const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const path = require("path")
const webpack = require("webpack")
const config = require("./webpack.config")


module.exports = [{
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: "[name].[hash:7].js",
    },
    module: {
        rules:[

        ]
    },
    plugins: [
        new CleanWebpackPlugin('./dist'),
        new HtmlWebpackPlugin({
            title: "Page index",
            filename: "index.html",
            templete: './index.html'
        })
    ],
    optimization: {
        splitChunks: {
            name: "vendor",
            chunks: 'initial',
            minChunks: 1
        },
        runtimeChunk: {
            name: "manifest"
        },
        namedModules: true
    }
}]