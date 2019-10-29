const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

class MichellePlugin {
  apply() {
    console.log('Michelle!');
  }
}

module.exports = {
  mode: "production",
  devtool: false,
  entry: path.resolve(__dirname, 'src', 'app.ts'),
  output: {
    filename: "./bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [      
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { 
        test: /\.tsx?$/, 
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: process.env.CACHE ? path.resolve(__dirname, '.cache') : null,
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@shopify/react-i18n/babel',
              ]
            }
          },          
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          },
        ],
      }
    ]
  },
  plugins: [
    new MichellePlugin(),
  ],
  optimization: {
    namedModules: true,
    namedChunks: true,
    moduleIds: 'named',
    minimize: false,
  },  
};

