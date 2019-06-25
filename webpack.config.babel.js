const path = require('path');
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import WebpackMd5Hash from 'webpack-md5-hash'

export default {
	entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			// {
			// 	test: /\.html$/,
			// 	use: [{
			// 		loader: 'html-loader',
			// 		options: { minimize: true }
			// 	}]
			// },
			{
        test: /\.s(a|c)ss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }
		]
	},
	
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.[contenthash].css',
		}),
		new HtmlWebpackPlugin({
			inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
		}),
		new WebpackMd5Hash()
	]
};