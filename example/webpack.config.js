const path = require('path');

module.exports = {
  mode: 'development',
  entry: [path.join(__dirname, 'src/index.js')],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!react-transition-collapse)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    port: 8082,
    contentBase: [path.join(__dirname, 'static'), path.join(__dirname, 'dist')],
    historyApiFallback: true
  }
}
