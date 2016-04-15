module.exports = {
  entry: './src/js/app.jsx',
  output: {filename:'dist/js/app.js'},
  module: {
    loaders: [
      // {test: /\.jsx$/, loader: 'jsx-loader'},
      {test: /\.jsx?$/, loader: 'babel-loader'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
