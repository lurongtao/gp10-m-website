// const gulp = require('gulp')
const path = require('path')

const { 
  src, 
  dest, 
  series 
} = require('gulp')

const gulpWebserver = require('gulp-webserver')
const webpackStream = require('webpack-stream')

// 拷贝 index.html 到 dev 根目录下
// 任务的回调一定要有返回值，返回值全部都是异步操作
// 如果不返回值，需要调用一个callback
// gulp.task('copyhtml', () => {
//   return gulp.src('./index.html')
//     .pipe(gulp.dest('./dev/'))
// })

function copyhtml() {
  return src('./index.html')
    .pipe(dest('./dev/'))
}

// 启动一个server
// gulp.task('webserver', () => {
//   return gulp.src('./dev/')
//     .pipe(webserver({
//       port: 8000,
//       livereload: true
//     }))
// })

function webserver() {
  return src('./dev/')
    .pipe(gulpWebserver({
      port: 8000,
      livereload: true
    }))
}

// 编译JS模块
function packjs() {
  return src('./src/app.js')
    .pipe(webpackStream({
      mode: 'development',
      entry: {
        app: './src/app.js'
      },
      output: {
        filename: '[name].js', // [name] == app
        path: path.resolve(__dirname, './dev/')
      }
    }))
    .pipe(dest('./dev/scripts'))
}

// gulp.task('default', gulp.series('copyhtml', 'webserver'))
// 私有任务，和公有任务定义。公有任务需要在exports里显式的定义
// exports.webserver = series(webserver)
exports.default = series(copyhtml, packjs, webserver)