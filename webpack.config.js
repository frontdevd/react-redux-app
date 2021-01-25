const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/index.jsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    devServer: {
        port: 3000
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HTMLWebpackPlugin({template: './src/index.html'}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            }
        ]
    }
}


// const path = require('path')
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin')
//
// module.exports = {
//     mode: 'development',
//     entry: ['@babel/polyfill', './src/index.jsx'],
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: '[name].[hash].js'
//     },
//
//     devServer: {
//         port: 3000,
//     },
//     resolve: {
//         extensions: ['js', 'jsx', 'scss', 'css']
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './src/index.html'
//         }),
//         new CleanWebpackPlugin(),
//     ],
//
//     module: {
//         rules: [
//             {
//                 test: /\.css$/i,
//                 use: ['style-loader', 'css-loader', 'sass-loader'],
//             },
//             {

//             {
//                 test: /\.(png|jpe?g|gif)$/i,
//                 use: [
//                     {
//                         loader: 'file-loader',
//                     },
//                 ],
//             },
//             {
//                 test: /\.m?js$/,
//                 exclude: /(node_modules|bower_components)/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-env']
//                     }
//                 }
//             },
//             {
//                 test: /\.m?jsx$/,
//                 exclude: /(node_modules|bower_components)/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-react', '@babel/preset-env']
//                     }
//                 }
//             },
//         ],
//     },
//
// }