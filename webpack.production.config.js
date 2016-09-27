var webpack = require("webpack");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // ____dirname是nodejs中的一个全局变量，它指向当前执行脚本所在的目录
    entry: __dirname + "/app/main.js",
    output: {
        // 打包后文件存放的地方
        path: __dirname + "/build",
        // 打包后输出文件的文件名
        filename: "bundle.js"
    },

    // 在配置文件中添加 json-loader
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                // query: {
                //     presets: ['es2015', 'react']
                // }
            },
            {
                test: /\.css$/,
                // 感叹号的作用在于使同一文件能够使用不同类型的loader
                // loader: 'style!css'
                // css模块化
                loader: 'style!css?modules'
            }
        ]
    },

    plugins:[
        new htmlWebpackPlugin({
            template: __dirname + "app/index.tmpl.html"
        })
    ]
}