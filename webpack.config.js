const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/pages/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Weather App',
        }),
    ],
};