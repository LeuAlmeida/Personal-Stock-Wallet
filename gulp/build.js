'use strict';

const gulp = require('gulp');
const conf = require('../conf');
const scripts = require('./scripts');
const styles = require('./styles');

const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'path-posix', 'del', 'browser-sync', 'nunjucks-render', 'batch-replace']
});

function clean() {
  return $.del($.pathPosix.join(conf.paths.dist, '/'), {
    force: true
  });
}

function nunjucks(site, done) {
  return gulp.src($.pathPosix.join(conf.paths.src, '*.html'))
    .pipe($.nunjucksRender({
      data: {
        layout: site.layout,
        base: conf.data.base
      },
      path: conf.paths.src,
      inheritExtension: true
    }))
    .pipe(gulp.dest($.pathPosix.join(conf.paths.dist, site.outputFolder)))
    .on('end', done);
}

var buildFunctions = [];
for (var demo in conf.layouts) {
  if (conf.layouts.hasOwnProperty(demo)) {
    const site = conf.layouts[demo];
    const build = function(done) {
      nunjucks(site, done);
    };
    buildFunctions.push(build);
  }
}

const build = gulp.series(
  clean,
  gulp.parallel(
    buildFunctions,
    scripts.scripts,
    styles.styles
  )
);

exports.buildFunctions = buildFunctions;
exports.build = build;
exports.clean = clean;

gulp.task('clean', clean);
gulp.task('build', build);
