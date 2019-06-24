import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [{
					loader: 'html-loader',
					options: { minimize: true }
				}]
			},
			{
        test: /\.s(a|c)ss$/,
        use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
      }
		]
	},

	resolve: {
    extensions: ['.js', '.scss']
	},
	
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Custom template',
			template: "./src/index.html",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	]
};