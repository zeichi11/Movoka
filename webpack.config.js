const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/index.js'],
  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 3000,
    contentBase: __dirname + '/public',
	historyApiFallback: true
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
		  'style-loader', // creates style nodes from JS strings
		  'css-loader', // translates CSS into CommonJS
		  'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css']
  },
  devtool: "source-map"
};