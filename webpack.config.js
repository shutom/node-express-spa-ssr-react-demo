module.exports = {
  entry: {
    "App": "./src/components/App/index.jsx",
    "express/server": "./src/.express/server.jsx"
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
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