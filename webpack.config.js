const CleanWebpackPlugin = require("clean-webpack-plugin")

const path = require("path")
const webpack = require("webpack")
const config = require("./webpack.config")


module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: "[name].[hash:7].js",
    },
    module: {
        rules:[

        ]
    },
    tap: [
        new CleanWebpackPlugin('dist'),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendor",
        //     minChunks: Infinity
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "manifast",
        //     minChunks: Infinity
        // })
        // new webpack.optimize.splitChunks()
    ]
}