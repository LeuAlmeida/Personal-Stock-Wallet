'use strict';

const gulp = require('gulp');
const conf = require('../conf');
const build = require('./build');
const styles = require('./styles');
const scripts = require('./scripts');

const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'path-posix', 'browser-sync', 'nunjucks-render']
});

function setPathDist(done) {
  conf.paths.dist = '.server';
  done();
}

function setTargetDist(done) {
  conf.target.dist = '.server';
  done();
}

function browser() {
  $.browserSync({
    notify: false,
    port: 2001,
    server: {
      baseDir: ['.server'],
      index: 'index.html'
    }
  });

  gulp.watch([
    '.server/**/*.{html,js,png,jpg,svg,gif}',
  ], {
    delay: 500
  }, function(callback) {
    $.browserSync.reload();
    callback();
  });

  gulp.watch($.pathPosix.join(conf.paths.src, '**/*.html'), gulp.parallel(build.buildFunctions));
  gulp.watch($.pathPosix.join(conf.paths.src, 'assets/**/*.js'), scripts.scripts);

  sassWatch();
}

function sassWatch() {
  return $.watchSass('src/assets/scss/**/*.scss', {
    includePaths: styles.sassIncludePaths
  })
    .pipe($.debug({title: 'Changed sass'}))
    .pipe($.plumber())
    .pipe($.sass({
      includePaths: styles.sassIncludePaths,
    }))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest($.pathPosix.join(conf.paths.dist, 'assets', 'css')))
    .pipe($.debug({title: 'Reloading css'}))
    .pipe($.browserSync.stream({match: '**/*.css'}));
}

const serve = gulp.series(setPathDist, build.build, browser);

gulp.task('serve', serve);
