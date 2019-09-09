'use strict';

const gulp = require('gulp');
const conf = require('../conf');

const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'path-posix']
});

function scripts() {
  return gulp.src([
    'src/assets/js/**/*.js',
    'node_modules/material-components-web/dist/*.js',
    'node_modules/pace-progress/*.js',
    'node_modules/marquee3000/marquee3k.js',
    'node_modules/apexcharts/dist/apexcharts.min.js'
  ])
    .pipe(gulp.dest($.pathPosix.join(conf.paths.dist, 'assets', 'js')));
}
function fonts() {
  return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
    .pipe(gulp.dest($.pathPosix.join(conf.paths.dist, 'assets', 'webfonts')));
}
function images() {
  return gulp.src('src/assets/images/**/*.{png,jpg,gif,svg}')
    .pipe(gulp.dest($.pathPosix.join(conf.paths.dist, 'assets', 'images')));
}

exports.scripts = gulp.parallel(scripts, fonts, images);
