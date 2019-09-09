'use strict';

const gulp = require('gulp');
const landing = require('./landing');
const build = require('./build');
const exec = require('child_process').exec;

const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'path-posix', 'del', 'browser-sync', 'nunjucks-render', 'batch-replace']
});

function cleanArtifacts() {
  return $.del('artifacts', {
    force: true
  });
}

function cleanBuild() {
  return $.del('dist', {
    force: true
  });
}

function cleanRelease() {
  return $.del('release', {
    force: true
  });
}

function zipBuild() {
  return gulp.src('dist/**/*')
    .pipe($.zip('build.zip'))
    .pipe(gulp.dest('artifacts'));
}

function zipRelease() {
  var fs = require('fs');
  var json = JSON.parse(fs.readFileSync('./package.json'));
  return gulp.src('release/**/*')
    .pipe($.zip('cryptum-' + json.version + '.zip'))
    .pipe(gulp.dest('artifacts/themeforest'));
}

function releaseCode() {
  return gulp.src([
    'src/**/*.*',
    './*.js',
    'gulp/**/*.*',
    './*.json',
    './.editorconfig'
  ], { base : '.' })
    .pipe($.zip('cryptum-source.zip'))
    .pipe(gulp.dest('release'));
}

function zipHTML() {
  return gulp.src('dist/**/*')
    .pipe($.zip('cryptum-html.zip'))
    .pipe(gulp.dest('release'));
}

function changelog() {
  return gulp.src('./CHANGELOG.md')
    .pipe(gulp.dest('docs'));
}

function htmlDocs() {
  return exec('gitbook build docs/ release/docs');
}

function pdfDocs() {
  return exec('gitbook pdf docs/ release/documentation.pdf');
}

function zipDocs() {
  return gulp.src('release/docs/**/*.*')
  .pipe($.zip('docs.zip'))
  .pipe(gulp.dest('artifacts'));
}

function sketch() {
  return gulp.src('sketch/**/*', { base : '.' })
    .pipe(gulp.dest('release'));
}

////////////
// Themeforest
//

function themePreview() {
  return gulp.src('themeforest/preview/templates/html/preview/**/*')
    .pipe($.zip('theme-preview.zip'))
    .pipe(gulp.dest('artifacts/themeforest'));
}

function thumbnail() {
  return gulp.src('themeforest/preview/templates/html/thumbnail.png')
    .pipe(gulp.dest('artifacts/themeforest'));
}

var themeforest = gulp.parallel(themePreview, thumbnail);

const fullClean = gulp.parallel(
  cleanBuild,
  cleanRelease,
  cleanArtifacts
);

const release = gulp.series(
  fullClean,
  changelog,
  gulp.parallel(
    build.build,
    htmlDocs,
    pdfDocs,
    sketch
  ),
  gulp.parallel(
    releaseCode,
    zipDocs,
    zipHTML
  ),
  // landing needs to wait for other builds so that changelogs are created.
  landing.build,
  gulp.parallel(zipBuild, zipRelease, themeforest),
  // Cleanup
  gulp.parallel(
    cleanBuild,
    cleanRelease
  )
);

gulp.task('release', release);
