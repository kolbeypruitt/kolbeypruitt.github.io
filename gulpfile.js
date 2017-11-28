var gulp = require('gulp');
var html = require('gulp-html');
var css = require('gulp-css');
var minifyCSS = require('gulp-csso');
var js = require('gulp-js-minify');

var paths = {
 scripts: ['./js/**/*.js'],
 html: ['./index.html', '!./test.html'], 
 dist: './build/'
};

// gulp.task('html', function(){
//   return gulp.src('./*.html')
//     .pipe(html())
//     .pipe(gulp.dest('build/html'))
// });

gulp.task('css', function(){
  return gulp.src('./css/*.css')
    .pipe(css())
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
});

 
gulp.task('js', function(){
  gulp.src('./build/script.js')
    .pipe(js())
    .pipe(gulp.dest('./build/'));
});

gulp.task('default', [ 'js', 'css' ]);