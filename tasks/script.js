var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var path = global.path;

// Minification du fichier javascript
gulp.task('script', function() {
    return gulp.src([
        path.js + 'vendor/jquery.js',
        path.js + '!(main).js',
        path.js + 'main.js'
    ])
        .pipe($.plumber())
        .pipe($.concat('main.min.js'))
        .pipe(gulp.dest(path.js))
        .pipe($.uglify())
        .pipe(gulp.dest(path.js))
        .pipe ($.size())
        .pipe(reload({stream:true}));
});