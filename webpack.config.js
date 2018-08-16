const path = require('path')

// webpack plugins
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const devMode = process.env.NODE_ENV !== 'production'
console.info("DevMode?", devMode)

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    name: 'ui',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: devMode ? '[name].js' : '[name].[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                loader: 'file-loader',
                exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.css$/, /\.json$/],
                options: {
                    name: 'files/[name].[hash:8].[ext]',
                },
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([ 'dist' ], { verbose:true }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
            chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
        })
    ],
    externals: {
        react: {
            root: 'React',
            amd: 'react',
            commonjs2: 'react',
            commonjs: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
            umd: 'react-dom',
        }
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
}



/*
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { 
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            minimize: true
                        }
                    },
                    'postcss-loader'
                ]
            },
*/
