const path = require('path');

module.exports = (env) => {
	return {
		mode: env.mode,
		entry: './src/index.ts',
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist'),
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.s[ac]ss$/i,
					use: ["css-loader", "sass-loader"],
				},
				{
					test: /\.html$/i,
					loader: "html-loader",
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
	}
};
