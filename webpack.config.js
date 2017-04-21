const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/public"
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./public",
        proxy: {
          "/api/": {
            target: "http://localhost:3006",
            secure: false
          }
        }
    },
    module: {
        loaders: [
            { test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=8192' },
            {
                test: /\.s?css$/,
                loaders: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "babel-preset-es2015",
                            "babel-preset-react",
                            "react",
                            "stage-0"
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
