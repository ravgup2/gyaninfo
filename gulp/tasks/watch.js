var gulp = require('gulp');
var $  = require('gulp-load-plugins')();
var srcPath = 'app';
var compilePath = 'compiled';
var livereload = require('connect-livereload');

gulp.task('watch', function () {
    gulp.watch(srcPath + '/index.html', ['compile:index']);
    gulp.watch(srcPath + '/styles/**/*.scss', ['compile:styles']);
    gulp.watch(srcPath + '/views/**/*.html', ['compile:templates']);
    gulp.watch(srcPath + '/scripts/**/*.js', ['karma:single']);

    
});


gulp.task('test', function () { console.log(process); });