/**
 * Created by Dianmi-21 on 2015/11/6.
 */
var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Clean = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './app/entry.js',
        vendor: ['avalon','mmStateDemand','jquery']
    },
    output: {
        path: './dev',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.html', ''],
        root: [path.join(__dirname, 'app/core'), path.join(__dirname, 'app/library'), path.join(__dirname, 'app/global')],
        alias: {
            domReady: 'domReady/domReady.js',
            jquery: 'jquery/jquery.js',
            avalon: 'avalon/avalon.shim.js',
            mmState: 'mm-router/mmState.js',
            mmStateDemand: 'mm-router/mmState.demand.js'
        }
    },
    plugins: [
        new Clean(['dev']),//清空目录
        new webpack.optimize.DedupePlugin(),//重复模块合并
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.[chunkhash].js'
        }),
        new HtmlWebpackPlugin({//生成首页
            inject: 'body',
            favicon: './app/global/images/favicon.ico',
            template: './app/core/index.html'
        })
    ]
};