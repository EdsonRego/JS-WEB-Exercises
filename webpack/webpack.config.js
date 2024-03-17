const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: { main: './src/pessoa.js' },
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
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