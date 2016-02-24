var gulp = require('gulp');
var open = require('open');

var _open = function () {
    open('http://localhost:9000');
};

gulp.task('open', ['compile', 'connect'], function () {
    _open();
});
