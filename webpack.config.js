const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProduction = env.production;
    return {
        mode: 'development',
        entry: './src/app.js',
        // entry: './src/playground/hoc.js',
        output: {
            path: path.join(__dirname, "public"),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                use: ['babel-loader'],
                test: /\.js|jsx$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }]
        },
        plugins: [new MiniCssExtractPlugin()],
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true
        }
    }
}
