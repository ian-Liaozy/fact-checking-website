'use strict';


const { series } = require('gulp');

const gulp = require('gulp');
const gls = require('gulp-live-server');
const sass = require('gulp-sass')(require('sass'));
const app = require('./app.js');
const clean = require('gulp-clean');
// const nodemon = require("gulp-nodemon");
// const server = require('browser-sync').create();





// gulp.task('compile', function() {
//     return gulp.src('./sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./css'));
// });

// function buildStyles() {
//     return gulp.src('./sass/**/*.scss')
//       .pipe(sass().on('error', sass.logError))
//       .pipe(gulp.dest('./css'));
//   };

// exports.buildStyles = buildStyles;

// exports.watch = function () {
// gulp.watch('./sass/**/*.scss', buildStyles);
// };

gulp.task('build', function(done) {
    // let server = gls.new('./app.js');
    // return server.start();
    app.default(); // run the app
    done();
});

gulp.task('default', series('build'));

exports.default = 'default';

