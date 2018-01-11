const path = require('path');

const webpack = require('webpack');

const config = {
    entry: [
        './Components/root.js',
    ],
    output: {
        pathinfo: true,
        path: path.resolve(__dirname, './'),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'Components'),
                loaders: ['babel-loader'],
            }
        ]
    },
};

module.exports = config;
