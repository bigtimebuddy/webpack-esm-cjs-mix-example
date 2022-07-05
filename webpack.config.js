const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  resolve: {
    alias: {
      // Force CommonJS for PixiJS since Pixi3D is not ES6 compatible
      'pixi.js': path.resolve(__dirname, 'node_modules/pixi.js/dist/cjs/pixi.min.js'),
    }
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};