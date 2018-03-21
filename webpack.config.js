const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const path = require("path")
const webpack = require("webpack")
const config = require("./webpack.config")


module.exports = [{
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: "[name].[hash:7].js",
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader']
            }
        ]
    },
    resolve: {
        alias:{
            jquery$: path.resolve(__dirname, "./src/libs/jquery.min.js")
        }
    },
    plugins: [
        new CleanWebpackPlugin('./dist'),
        new HtmlWebpackPlugin({
            title: "Page index",
            filename: "index.html",
            templete: './index.html',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'initial',
            maxInitialRequests: 3,
            maxAsyncRequests: 5,
            minChunks: 1,
            minSize: 10,
            name: "vendors",
            cacheGroups: {
                test: /([\\/]node_modules[\\/]|[\\/]src[\\/]libs[\\/])/,
            }
        },
        runtimeChunk: {
            name: "manifest"
        },
        namedModules: true
    }
}]