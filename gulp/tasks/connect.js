var connect = require('connect');
var gulp = require('gulp');
//var historyApiFallback = require('connect-history-api-fallback');
var livereload = require('connect-livereload');
//var prism = require('connect-prism');
//var refresh  = require('gulp-livereload');
var serveStatic = require('serve-static');

var _connect = function (staticPath, cb) {
    var lrport = 35729;
    var server = connect();

    // Add live reload
    server.use(livereload({ port: lrport }));

    // HTML5 pushState fallback
    //server.use(historyApiFallback);

    // Routes
    server.use(serveStatic(staticPath));

    // Start live reload
    //refresh.listen();

    // Start webserver
    server.listen(8000, cb);
};

gulp.task('connect', ['connect:compile']);

gulp.task('connect:compile', function (next) {
    _connect('./compiled', next);
});
