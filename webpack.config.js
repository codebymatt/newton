const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, use: 'babel-loader', exclude: /mode_modules/ },
            //{ test: /\.(jpg|png|svg)$/, use: 'file-loader', options: {
            //    name: './src/graphics/[hash].[ext]',
            //},},
            { test: /\.svg$/, use: 'file-loader'},
            { test: /\.sass$/, use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
                })
            }
         ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin('style.css'),
    ]
};
