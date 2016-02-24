var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;
var runSequence = require('run-sequence');

var compilationTasks = [
    'compile:images',
    'compile:scripts',
    'compile:styles',
    'compile:templates',
    'compile:index',
];

var srcPath = 'app';
var compilePath = 'compiled';
var bowerPath = 'compiled/bower_components';
var appName = 'gyaninfoApp';

var jsDest = compilePath + '/scripts';
var cssDest = compilePath + '/styles';
var imgDest = compilePath + '/images';
var htmDest = compilePath + '/views';


// gather all src images into /compiled/images
gulp.task('compile:images', function () {
    return gulp.src(srcPath + '/**/images/**/*')
        .pipe(gulp.dest(imgDest));
});//compile:images

// Place your (pre)compiling/transpiling logic here
gulp.task('compile:scripts', function () {
    return gulp.src(srcPath + '/scripts/**/*.js')
        .pipe(gulp.dest(jsDest));
});//compile:scripts

// compile SCSS to {compilePath}/application.css
gulp.task('compile:styles', function () {
    return gulp.src(srcPath + '/styles/**/*.scss')
    .pipe(plugins.sass({outputStyle: 'expanded'}).on('error', plugins.sass.logError))
    .pipe(gulp.dest(cssDest));
});//compile:styles

// compile all src HTML files into ng-friendly {compilePath}/templates.js
gulp.task('compile:templates', function () {
    //return gulp.src(srcPath + '/views/**/*')
     //   .pipe(gulp.dest(htmDest));

    var minifyHtmlOptions = {
        empty: true,
        spare: true,
        quotes: true
    };
    var ngHtml2JsOptions = {
        //stripPrefix: 'app/',
        prefix: 'views/',
        moduleName: appName + '.tpls'
    }; 
    return gulp.src(srcPath + '/views/**/*.html')
    .pipe(plugins.minifyHtml(minifyHtmlOptions))
    .pipe(plugins.ngHtml2js(ngHtml2JsOptions))
    .pipe(plugins.concat('templates.js'))
    .pipe(gulp.dest(jsDest));
});//compile:templates

// Inject Bower components and Scripts from {srcPath}/index.html into {compilePath}/index.html
gulp.task('compile:index', function () {
    // script injection
    var scriptSourcePaths = [
        srcPath + '/scripts/**/*.js',
        '!' + srcPath + '/scripts/app.js'
    ];
    var scriptSources = gulp.src(scriptSourcePaths).pipe(plugins.angularFilesort());

    return gulp.src(srcPath + '/index.html')
        .pipe(gulp.dest(compilePath))
        .pipe(wiredep({ }))
        .pipe(plugins.inject(scriptSources, {
            ignorePath: 'app/scripts',
            addRootSlash: false,
            addPrefix: 'scripts'
        }))
        .pipe(gulp.dest(compilePath));

});//compile:index

gulp.task('compile', function (cb) {
    runSequence(compilationTasks, cb);
});//compile