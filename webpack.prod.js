const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        SPORTSDATA_API_KEY: JSON.stringify(process.env.SPORTSDATA_API_KEY),
        GOOGLE_MAP_API_KEY: JSON.stringify(process.env.GOOGLE_MAP_API_KEY),
      },
    }),
  ],
  stats: {
    errorDetails: true,
    children: true,
  },
});
