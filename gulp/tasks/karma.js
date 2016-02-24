var gulp = require('gulp');
var Server = require('karma').Server;
var karmaConf = process.cwd() + '/karma.conf.js';

var compilePath = 'compiled';
var bowerPath = 'compiled/bower_components';
var config = {
    configFile: karmaConf,
    singleRun: true
  };
gulp.task('karma:single', ['compile'], function (done) {
	server = new Server(config, [done])
    server.start()
});//karma:single