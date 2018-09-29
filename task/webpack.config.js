const { resolve } = require('path');
const r = url => resolve(__dirname, url);
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  devtool: false,
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyjsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  },
  // 配置项目输出
  output: {
    path: r('../dist'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      util: r('../util'),
      style: r('../style'),
      lib: r('../lib'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            [
              'env',
              {
                modules: false
              }
            ]
          ]
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('autoprefixer')({
                  browsers: [
                    '> 1%',
                    'last 2 versions',
                    'not ie <= 8'
                  ]
                })
              ]
            }
          },
          {
            loader: 'less-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      },
      {
        test: /\.mina$/,
        loader: 'wechat-mina-loader',
        options: {
          path: r('../'),
          cwd: r(process.cwd()),
          dist: './dist'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].wxss'
    }),
    new CopyWebpackPlugin([
      {
        from: {
          glob: 'pages/**/*.json',
        },
        to: ''
      },
      {
        from: {
          glob: 'subPackage/**/*.json',
        },
        to: ''
      },
      {
        from: {
          glob: 'components/**/*.json',
        },
        to: ''
      },
      {
        from: 'project.config.json',
        to: 'project.config.json'
      },
      {
        from: 'config.js',
        to: 'config.js'
      },
      {
        from: 'static',
        to: 'static'
      }
    ]),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ProgressBarPlugin()
  ],
}