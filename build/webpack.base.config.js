const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: './example/main.js',
    output: {
        filename: '[name]_[chunkhash:8].js'
    },
    module: {
        rules: [
            {
              test: /\.vue$/,
              loader: 'vue-loader',
              options: {
                compilerOptions: {
                  preserveWhitespace: false
                }
              }
            },
            {
                test: /\.js?$/,
                use: 'babel-loader'
            },
            {
                test: /\.css?$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        // limit: 10240
                        name: '[name]_[hash:8].[ext]'
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        // limit: 10240
                        name: '[name]_[hash:8].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, `../example/index.html`),
            filename: `index.html`,
        }),
        new VueLoaderPlugin()
    ]
}
