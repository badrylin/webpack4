const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const path = require("path")
const webpack = require("webpack")
const config = require("./webpack.config")


module.exports = [{
    // entry: {
    //     index: './index.js', // 4.0+默认src/
    // },
    output: {
        // path: path.join(__dirname, './dist'), // 4.0+默认dist
        filename: "[name].[chunkhash:7].js",
        publicPath: './',
        chunkFilename: "[name].[chunkhash:7].js",
    },
    devtool: 'eval-source-map',
    module: {
        rules:[
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader'],
            },{
                resolve:{
                    alias:{
                        jquery$: path.resolve(__dirname, "./src/libs/jquery.min.js")
                    }
                }
            }
        ]
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
        }),
    ],
    optimization: {
        splitChunks: {
            maxInitialRequests: 3,
            maxAsyncRequests: 5,
            minChunks: 1,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    minSize: 1,
                    chunks: 'async',
                    priority: -20,
                    reuseExistingChunk: true,
                },
                vendors: {
                    chunks: 'initial',
                    name: 'vendors',
                    minSize: 1,
                    test: /([\\/]node_modules[\\/])/,
                    priority: -10,
                },
                jquery: {
                    chunks: 'all',
                    name: 'jquery',
                    test: /([\\/]src[\\/]libs[\\/])/,
                    priority: -5,
                    reuseExistingChunk: true,
                },
            }
        },
        runtimeChunk: {
            name: "manifest"
        },
        namedModules: true
    }
}]