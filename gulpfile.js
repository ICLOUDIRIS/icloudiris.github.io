var gulp = require('gulp');

//Plugins模块获取
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');  
var htmlclean = require('gulp-htmlclean');
var imagemin = require('gulp-imagemin');

var babel = require('gulp-babel');

//压缩css
gulp.task('minify-css', function () {
return gulp.src('./public/**/*.css')
.pipe(minifycss())
.pipe(gulp.dest('./public'));
});


//压缩html
gulp.task('minify-html', function () {
return gulp.src('./public/**/*.html')
.pipe(htmlclean())
.pipe(htmlmin({
removeComments: true,
minifyJS: true,
minifyCSS: true,
minifyURLs: true,
}))

.pipe(gulp.dest('./public'))
});
//压缩js 不压缩min.js
gulp.task('minify-js', function () {
return gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
.pipe(babel())
.pipe(concat('XX_build.js'))
.pipe(uglify())
.pipe(gulp.dest('./public'));
});

gulp.task('minify-images', function() {
  return gulp.src('./public/img/**/*.*')
      .pipe(imagemin(
      [imagemin.gifsicle({'optimizationLevel': 3}),
      imagemin.jpegtran({'progressive': true}),
      imagemin.optipng({'optimizationLevel': 8}),
      imagemin.svgo()],
      {'verbose': true}))
      .pipe(gulp.dest('./public/img'))
});
//4.0以前的写法 
//gulp.task('default', [
  //  'minify-html', 'minify-css', 'minify-js'
//]);
//4.0以后的写法
// 执行 gulp 命令时执行的任务
// gulp.task('build', gulp.parallel('minify-html', 'minify-css', 'minify-js', function() {
//   // Do something after a, b, and c are finished.
// }));


gulp.task('default',gulp.series(gulp.parallel('minify-html','minify-css','minify-js','minify-images')));