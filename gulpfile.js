const { series } = require('gulp');

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

exports.watch = function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
};
exports.default = series(sass);