const { series } = require('gulp');

const gulp = require('gulp');
let gls = require('gulp-live-server');
const sass = require('gulp-sass')(require('sass'));
const app = require('./app.js');
const clean = require('gulp-clean');


gulp.task('clean', function() {
    return gulp.src('./public/**/*.css', { read: false })
        .pipe(clean());
});

gulp.task('compile', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});




gulp.task('build', series("clean", "compile", function() {
    // let server = gls.new('./app.js');
    // return server.start();
    app.default(); // run the app
}));

gulp.task('default', series('build'));



// gulp.task('build', function() {')
// exports.watch = function () {
//     gulp.watch('./sass/**/*.scss', ['sass']);
// };
exports.default = 'default';

