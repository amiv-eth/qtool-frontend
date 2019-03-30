const HtmlWebpackPlugin = require('html-webpack-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin').default;
const path = require('path');

const config = {
  context: `${__dirname}/src`, // `__dirname` is root of project and `src` is source

  entry: ['@babel/polyfill', './index.js'],

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
              presets: [['@babel/preset-env', { targets: 'last 2 years' }]],
              plugins: [
                '@babel/plugin-proposal-object-rest-spread'
              ],
            },
          },
        ],
        include: [path.resolve(__dirname, './src')],
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
    ],
  },


  // Dynamically include config
  resolve: {
    alias: {
      config: `${__dirname}/config.js`,
      'polythene-theme': `${__dirname}/theme.js`, // when config is in the project root
    },
  },

  devtool: 'eval-source-map', // Default development sourcemap

  optimization: {
    usedExports: true,
    sideEffects: true,
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
    })
  ],
};

module.exports = config;

