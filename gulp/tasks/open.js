var gulp = require('gulp');
var open = require('open');

var _open = function () {
    open('http://localhost:8000');
};

gulp.task('open', ['compile', 'connect'], function () {
    _open();
});
