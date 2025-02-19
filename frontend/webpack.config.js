const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9001,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new CopyPlugin({
            patterns: [
                {from: "./src/templates", to: "templates"},
                {from: "./src/static", to: "static"},
                {from: "./src/styles/plugins/bootstrap.min.css", to: "css"},
                {from: "./src/styles/plugins/jquery-ui.min.css", to: "css"},
                {from: "./src/components/plugins/jquery-ui.min.js", to: "js"},
                {from: "./src/components/plugins/chart.umd.js.map", to: "js"},
                {from: "./src/components/plugins/chart.js", to: "js"},
                {from: "./src/components/plugins/jquery-3.7.1.min.js", to: "js"},
                {from: "./src/components/plugins/bootstrap.min.js", to: "js"},
                {from: "./src/components/js.js", to: "js"},
            ],
        }),
    ],

};