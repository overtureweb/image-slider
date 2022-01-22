const path = require('path');

module.exports = (env) => {
    return {
        mode: env.mode || "development",
        entry: './src/index.ts',
        devtool: !env.mode && 'inline-source-map',
        devServer: {
            static: './dist',
            port: 3000
        },
        output: {
            filename: 'overturedev.io.carousel.js',
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
        }
    }
};
