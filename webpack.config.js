const { NormalModuleReplacementPlugin } = require("webpack");

const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'), // arquivo origem
    output: {
        path: path.resolve(__dirname,'public'),  // arquivo destino
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,              // toda vez que eu precisar de um js
                exclude: /node_modules/,    // e este arquivo nao estiver na pasta node_modules
                use: {                       // converta pra mim utilizando o babel-loader
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/, 
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader'},
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i, // i --> regex se torna case insensitive
                use: { 
                    loader: 'file-loader',
                }
            }
        ]
    }
};