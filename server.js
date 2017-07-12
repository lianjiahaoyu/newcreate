var config = require("./webpack.config.js");
   var webpack = require('webpack');
   var WebpackDevServer = require('webpack-dev-server');

config.entry.unshift("webpack-dev-server/client?http://localhost:8081/");

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
   contentBase:'./',
   publicPath: "./build"
});
server.listen(8081);
