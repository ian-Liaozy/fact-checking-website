const { series } = require('gulp');

const gulp = require('gulp');
let gls = require('gulp-live-server');
const sass = require('gulp-sass')(require('sass'));
const app = require('./app.js');

gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('build', function() {
    // let server = gls.new('./app.js');
    // return server.start();
    app;
})

gulp.task('default', gulp.series('sass', 'build', function() { console.log('default task') }));



// gulp.task('build', function() {')
// exports.watch = function () {
//     gulp.watch('./sass/**/*.scss', ['sass']);
// };
exports.default = 'default';

