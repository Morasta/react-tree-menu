var webpack = require("webpack");
var validator = require("webpack-validator");


module.exports = {
    cache: true,
    devtool: 'inline-source-map',
    entry: './example/Boot',
    output: {
        path: __dirname + "/example",
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: [/node_modules/],
            use: ['react-hot-loader/webpack', 'babel-loader?presets[]=react']
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },

    devServer: {
        hot: true,
        inline: true,
        contentBase: './example/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        })
    ]
};

