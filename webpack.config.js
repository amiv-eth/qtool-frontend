const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const RobotstxtPlugin = require('robotstxt-webpack-plugin');

const path = require('path');

const config = {
  context: `${__dirname}/src`, // `__dirname` is root of project and `src` is source

  entry: './index.js',

  output: {
    path: `${__dirname}/dist`, // `dist` is the destination
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].chunk.js',
  },

  // To run development server
  devServer: {
    contentBase: `${__dirname}/dist`,
    publicPath: '/',
    compress: true,
    port: 9000,
    hot: true,
    index: 'index.html',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Check for all js files
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3, targets: 'last 2 years' }],
              ],
              plugins: ['@babel/plugin-proposal-object-rest-spread'],
            },
          },
        ],
        include: [path.resolve(__dirname, './src')],
      },

      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },

  // Dynamically include config
  /*resolve: {
    alias: {
      config: `${__dirname}/config.js`,
      'polythene-theme': `${__dirname}/theme.js`, // when config is in the project root
    },
  },*/

  mode: 'development',
  devtool: 'eval-source-map', // Default development sourcemap

  optimization: {
    usedExports: true, //True is better
    sideEffects: false, // False is the better option here, don't ask why, it's a mistery
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '-',
      name: true,
    },
  },

  plugins: [
    new RobotstxtPlugin({
      policy: [{ userAgent: '*', allow: '/' }],
    }),
    new HtmlWebpackPlugin({
      title: 'AMIV an der ETH',
      filename: 'index.html',
      template: 'index.html',
    }),
    new BundleAnalyzerPlugin(),
  ],
};

module.exports = config;
