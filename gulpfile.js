var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var $ = require('gulp-load-plugins')({lazy: true});
var browserSync = require('browser-sync').create();
var git = require('gulp-git');

gulp.task('scss', function () {
    console.log('Run scss tasks');

    return gulp
        .src('assets/sass/*.scss')
        .pipe($.sass({outputStyle: 'compressed'}))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('assets/css/'))
});

gulp.task('watch', function () {
    gulp.watch('assets/sass/*.scss', gulp.series('scss'));
});

gulp.task('init', function(){
    git.init(function (err) {
        if (err) throw err;
    });
});

/*gulp.task('commit', function(){
    return gulp.src('./git-test/*')
        .pipe(git.commit('initial commit'));
});

gulp.task('push', function(){
    git.push('origin', 'npm', function (err) {
        if (err) throw err;
    });
});*/