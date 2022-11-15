const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist')
        }
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.module.css$/,
                use: ["css-loader", {
                    options: {
                        esModule: true, // Говорим о том, что хотим использовать ES Modules
                        modules: {
                            namedExport: true, // Указываем, что предпочитаем именованый экспорт дефолтному
                        },
                    }
                }]
            },
            {
                test: /\.module.css$/,
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            modules: true, // Раз — и готово
                        },
                    },
                ],
            },
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(sass|scss)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.styl$/,
                loader: "stylus-loader", // compiles Styl to CSS
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
}