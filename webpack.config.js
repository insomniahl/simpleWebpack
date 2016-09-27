module.exports = {
    // 配置生成source maps
    devtool: 'eval-source-map',

    // ____dirname是nodejs中的一个全局变量，它指向当前执行脚本所在的目录
    entry: __dirname + "/app/main.js",
    output: {
        // 打包后文件存放的地方
        path: __dirname + "/public",
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

    devServer: {
        // 本地服务器所加载的页面所在的目录
        contentBase: "./public",
        // 输出结果为彩色
        colors: true,
        // 不跳转
        historyApiFallback: true,
        // 实时刷新
        inline: true,
        // 设置默认监听端口，默认为8080
        port: 8080
    }
}