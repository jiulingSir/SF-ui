const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './example/main.js',
    output: {
        filename: '[name]_[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: 'babel-loader'
            },
            {
                test: /\.css?$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                              plugins: () => [
                                require('autoprefixer')({
                                    browsers: ['last 2 version', '>1%', 'ios 7']
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.less?$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                              plugins: () => [
                                require('autoprefixer')({
                                    browsers: ['last 2 version', '>1%', 'ios 7']
                                })
                            ]
                        }
                    },
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUnit: 75,
                            remPrecission: 8
                        }
                    }
                ]
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
        new HtmlWebpackPlugin()
    ]
}
