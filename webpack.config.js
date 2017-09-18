module.exports = {
  entry: {
    "client": "./src/client.js",
  },
  output: {
    filename: '[name].js',
    path: __dirname + "/build/"
  },
  module: {
    loaders: [
      // {
      //   test: the target files for the build
      //   exclude: the files which will be excluded fromt the build
      //   loader: loader
      //   query: set the query parameters for the loader
      // },
      {
       test: /\.js$/,
       loader: 'babel-loader',
       exclude: /node_modules/,
       query:
        {
          presets: ['es2015','stage-0']
        }
      },
      {
        test: /\.jsx?$/, // 拡張子がjsxで
        exclude: /node_modules/, // node_modulesフォルダ配下でなければ
        loader: 'babel-loader', // babel-loaderを使って変換する
        query: {
          plugins: ["transform-react-jsx"] // babelのtransform-react-jsxプラグインを使ってjsxを変換
        }
      }
    ]
  },
  node: {
    fs: "empty",
    net: 'empty'
  }
};
