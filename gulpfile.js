var gulp = require('gulp'),
    less = require('gulp-less');
    browserify = require('gulp-browserify'),
    node_underscorify = require('node-underscorify');
    reactify = require('reactify');

gulp.task('browserify', function() {
    return gulp.src('src/main.js')
        .pipe(browserify({
            debug: true,
            transform: [node_underscorify, reactify],
            extensions: [".html",".jsx"]
        }).on('error', function(e){ console.warn(e); }))
        .pipe(gulp.dest('build/js'));
});

gulp.task('less', function() {
    return gulp.src('style/main.less')
        .pipe(less())
        .pipe(gulp.dest('build/style'));
});

gulp.task('watch', function() {
    gulp.watch(["style/main.less"], ["less"]);
    gulp.watch(["src/**"], ["browserify"]);
});

gulp.task('default', ["less", "browserify", "watch"]);

gulp.on('error', function(){
    console.log('error');
})
