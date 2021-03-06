const gulp        = require('gulp'),
      watch       = require('gulp-watch'),
      browserSync = require('browser-sync').create();

gulp.task('default', function () {
    gulp.start('watch');
})

gulp.task('cssInject', ['css'], function () {
    return gulp.src('./app/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function () {
    browserSync.reload();
})

gulp.task('watch', ['css', 'scripts'], function () {
    browserSync.init({
        notify: false,
        server: {
            baseDir: 'app'
        }
    });
    watch('./app/assets/css/**/*.css', function () {
        gulp.start('cssInject');
    });
    watch('./app/assets/js/**/*.js', function () {
        gulp.start('scriptsRefresh');
    })
    watch(['./app/index.html', './app/views/**/*.html'], function () {
        browserSync.reload();
    });
});
