const path = require('path');
const babelPlugin = require('babel-loader');

module.exports = {
    entry: {
        index: './js/index.js'
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
           test: /\.js$/, 
           use: [babelPlugin.loader]  
        }]
    }
}