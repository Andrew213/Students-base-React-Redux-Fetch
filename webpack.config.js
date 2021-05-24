const path = require("path")
const miniCssExcteractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHotPlugin = require("html-webpack-hot-plugin");
const FileIncludeWebpackPlugin = require('file-include-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


let mode = 'development';
let target = "web";
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
    target = "browserslist"
};
const GLOBAL_CSS_REGEXP = /\.global\.css$/;


module.exports = {
    mode: mode,
    target: target,

    output: {
        path: path.resolve(__dirname, path.basename(__dirname)),
        assetModuleFilename: "images/[hash][ext][query]",
        publicPath: ""
    },
    resolve: {
        extensions: [".js", ".json", "png", "jpg", "svg", "webp"],
    },
    module: {

        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    esModule: false
                }
            },
            {
                test: /\.(png|jpg|svg|webp)$/i,
                type: "asset",
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]_[local]-[hash:base64:5]'
                            }
                        }
                    },
                    "postcss-loader",
                    "sass-loader"
                ],
                exclude: GLOBAL_CSS_REGEXP
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                ]
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new miniCssExcteractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),

    ],
    devtool: "source-map",
    devServer: {
        contentBase: `${path.basename(__dirname)}`,
        publicPath: "",
        open: true,
        hot: true
    }
}



