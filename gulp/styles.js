'use strict';

const gulp = require('gulp');
const conf = require('../conf');

const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'path-posix']
});

const sassIncludePaths = [
  'src/assets/scss',
  'node_modules'
];

function sass() {
  return gulp.src('src/assets/scss/*.scss')
    .pipe($.sass({
      includePaths: sassIncludePaths
    }))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest($.pathPosix.join(conf.paths.dist, 'assets', 'css')));
}

exports.styles = sass;
exports.sassIncludePaths = sassIncludePaths;
