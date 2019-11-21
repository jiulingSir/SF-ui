const merge = require('webpack-merge');
const baseConf = require('./webpack.base.config');
const devConf = require('./webpack.dev.config');
const prodConf = require('./webpack.prod.config');

let config = process.NODE_ENV === 'production' ? prodConf : devConf;

module.exports = merge(baseConf, config);
