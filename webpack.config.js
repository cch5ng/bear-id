//webpack.config.js

//var fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const parts = require('./lib/parts.js');
const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};
const webpack = require('webpack');

process.env.BABEL_ENV = TARGET;
const common = {

  // Entry accepts a path or an object of entries.
  // The build chapter contains an example of the latter.
  entry: PATHS.app,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        // Test expects a RegExp! Note the slashes!
        test: /\.css$/,
        loaders: ['style', 'css'],
        // Include accepts either a path or an array of paths.
        include: PATHS.app
      },

      // Set up jsx. This accepts js too thanks to RegExp
      {
        test: /\.jsx?$/,
        // Enable caching for improved performance during development
        // It uses default OS directory by default. If you need something
        // more custom, pass a path to it. I.e., babel?cacheDirectory=<path>
        loader: 'babel',
		    query: {
			     cacheDirectory: true,
			     presets: ['react', 'es2015', 'survivejs-kanban']
		    },
        include: PATHS.app
      },
      // SASS
  		{
  		  test: /\.scss$/,
  		  loaders: ["style", "css", "sass"],
  		  include: PATHS.app
  		},
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file',
        include: './build/static/images'
      }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
    	template: 'node_modules/html-webpack-template/index.ejs',
    	title: 'Bear ID',
    	appMountId: 'app',
    })
  ]
};

// Default configuration
if(TARGET === 'start' || !TARGET) {

 module.exports = merge(common, {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'eval-source-map'
  });
}

if(TARGET === 'build') {
  module.exports = merge(common,
      parts.minify(),
      {
        devtool: 'source-map'
      });
}