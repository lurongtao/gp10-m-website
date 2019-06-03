const { src, dest, series, parallel, watch } = require('gulp')
const path = require('path')

const gulpWebserver = require('gulp-webserver')
const webpackStream = require('webpack-stream')
const gulpSass = require('gulp-sass')
const proxy = require('http-proxy-middleware')
const del = require('del')

function copyhtml() {
  return src('./*.html')
    .pipe(dest('./dev'))
}

function copylibs() {
  return src('./src/libs/**/*')
    .pipe(dest('./dev/libs'))
}

function copyimages() {
  return src('./src/images/**/*')
    .pipe(dest('./dev/images'))
}

function copyicons() {
  return src('./src/icons/**/*')
    .pipe(dest('./dev/icons'))
}

function webserver() {
  return src('./dev')
    .pipe(gulpWebserver({
      host: 'localhost',
      port: 8000,
      livereload: true,
      middleware: [
        proxy('/api', {
          target: 'https://m.lagou.com',
          changeOrigin: true, // 访问不同的域名，需要配置成 true
          pathRewrite: {
            '^/api': ''
          }
        }),
        proxy('/json', {
          target: 'http://localhost:9000',
          pathRewrite: {
            '^/json': ''
          }
        })
      ]
    }))
}

function packjs() {
  return src('./src/**/*')
    .pipe(webpackStream({
      mode: 'development',

      entry: {
        app: './src/app.js'
      },

      output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dev')
      },

      // 将ES6-ES8 代码转换成 ES5
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime']
              }
            }
          },
          {
            test: /\.html$/,
            loader: 'string-loader'
          }
        ]
      }
    }))
    .pipe(dest('./dev/scripts'))
}

function packCSS() {
  return src('./src/styles/app.scss')
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(dest('./dev/styles'))
}

function clear(target) {
  return function() {
    return del(target)
  }
}

function watcher() {
  watch('./src/libs/**/*', series(clear('./dev/libs'), copylibs))
  watch('./src/images/**/*', series(clear('./dev/images'), copyimages))
  watch('./src/icons/**/*', series(clear('./dev/icons'), copyicons))
  watch('./*.html', series(clear('./dev/*.html'), copyhtml))
  watch('./src/styles/**/*', series(packCSS))
  watch(['./src/**/*', '!src/libs/**/*', '!src/icons/**/*', '!src/images/**/*', '!src/styles/**/*'], series(packjs))
}

exports.default = series(parallel(packCSS, packjs, copylibs, copyimages, copyicons), copyhtml, webserver, watcher)