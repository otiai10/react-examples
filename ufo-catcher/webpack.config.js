module.exports = {
  entry: './src/js/app.jsx',
  output: {filename:'./dist/js/app.js'},
  module: {
    loaders: [
      {test: /.jsx?$/, loader: 'babel-loader'},
      {test: /.css$/,  loader: 'style-loader!css-loader'},
      {test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,loader: 'url'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
