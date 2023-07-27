const path = require('path');

module.exports = {
    //...
    mode: "development",
    output: {
        // 配置打包后文件存放目录
        path: path.join(__dirname, './dist'),
        // 配置打包后文件的名称
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'www'),
        },
        compress: true,
        host: 'localhost',
        port: 9000,
        hot: true
    },
};
