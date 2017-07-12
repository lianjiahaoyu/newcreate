var path = require('path');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        filename: 'app.js',
        publicPath: 'http://localhost:8081/build/',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
                loader: 'babel-loader' // 加载模块 "babel" 是 "babel-loader" 的缩写
            },
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
            {test: /\.(eot|woff|woff2|ttf|svg)$/, loader: "file-loader" }
        ]
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['.js','.jsx','.css']
    }
};
