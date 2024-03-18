const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: { main: './src/principal.js' },
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCssExtractPlugin({})
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                'style-loader',
                'css-loader',
            ]
        }]
    }
}