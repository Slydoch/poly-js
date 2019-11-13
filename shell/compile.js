const path = require('path');
const webpack = require('webpack');


webpack({
	mode: 'development',
	entry: path.resolve(__dirname, '..', 'index.js'),
	output: {
		path: path.resolve(__dirname, '..', 'dist'),
		filename: 'poly-js.js'
	}
}, (err, stats) => {
	if (err || stats.hasErrors()) {
		console.log('Error');
	} else {
		console.log('Success');
	}
});


webpack({
	mode: 'production',
	entry: path.resolve(__dirname, '..', 'index.js'),
	output: {
		path: path.resolve(__dirname, '..', 'dist'),
		filename: 'poly-js.min.js'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js']
	},
	stats: {
		colors: true
	},
	devtool: 'source-map'
}, (err, stats) => {
	if (err || stats.hasErrors()) {
		console.log('Error');
	} else {
		console.log('Success');
	}
});

