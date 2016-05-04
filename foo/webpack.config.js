module.exports = {
  entry: './src',
  output: {
    filename:'./lib/index.js'
  },
  module: {
    loaders: [
      {test: /.jsx?$/, loader: 'babel-loader'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
