const path = require('path') // 引用path模块
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {  // 这里是commrnt.js语法
    // 入口文件
    entry: "./src/index.js",
    // 打包后的出口文件
    output: {
        // 输出的路径  是绝对路径(导入path模块) 这里是用node来做的
        path: path.resolve(__dirname, 'build'),
        // 输出的文件名称
        filename: 'index.js',
    },
    // 使用开发模式打包
    mode: "development",
    plugins: [new htmlWebpackPlugin({
        template: 'src/index.html'
    }
    )],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192 //对图片的大小做限制，8kb
                    }
                  }
                ]
              }


        ]
    }
}