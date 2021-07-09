const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
 
module.exports = {
    //path to entry paint
    entry: './src/index.tsx',
 
    //path and filename of the final output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},

    module: {
		rules: [
			{ test: /\.(tsx|ts)?$/, exclude: /node_modules/, use: "babel-loader" },
			{ test: /\.css?$/, use: ["style-loader", "css-loader", "postcss-loader"] }
		]
	},

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        }),
        new webpack.ProvidePlugin({
            React: "react",
            ReactDOM: "react-dom",
        }),
    ],
 
    //default mode is production
    mode: 'development',

    devtool: "source-map",

    devServer: {
		contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
		compress: true
	}
}