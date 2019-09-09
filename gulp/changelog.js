'use strict';

const gulp = require('gulp');
const chalk = require('chalk');
const dateFormat = require('dateformat');

const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'git-semver-tags'],
  camelize: true
});

function bump(type) {
  return gulp.src('./package.json')
    .pipe($.bump({ type: type }))
    .pipe(gulp.dest('./'));
}

function checkVersion(cb) {
  // Get package data.
  const fs = require('fs');
  const packageData = JSON.parse(fs.readFileSync('./package.json'));

  $.gitSemverTags(function(err, tags) {
    const latestVersion = tags[0];
    console.log(chalk.green('Current Package Version') + ' ' + chalk.blue.bgRed.bold(packageData.version));
    console.log(chalk.green('Current Git Version') + ' ' + chalk.blue.bgRed.bold(latestVersion));
    if (latestVersion === packageData.version) {
      console.error(chalk.red('Warning: Changelog won\'t change because the "package.json" version is ' +
          'equal to the latest Git tag.\n'));
      process.exit(-1);
    }
    cb();
  });
}

function updateChangelog() {
  return gulp.src('CHANGELOG.md')
    .pipe($.conventionalChangelog({
      // conventional-changelog options go here
      preset: 'angular'
    }, {
      // context goes here
    }, {
      // git-raw-commits options go here
    }, {
      // conventional-commits-parser options go here
    }, {
      // conventional-changelog-writer options go here
      finalizeContext: function(context, options, commits, keyCommit) {
        context.date = dateFormat(new Date(), 'mmmm d, yyyy', true);
        return context;
      },
      commitPartial: `
*{{#if scope}} **{{scope}}:**
{{~/if}} {{#if subject}}
  {{~subject}}
{{~else}}
  {{~header}}
{{~/if}}`}))
    .pipe(gulp.dest('./'));
}

function tag() {
  return gulp.src('./package.json')
    .pipe($.tagVersion({
      prefix: ''
    }));
}

const changelog = gulp.series(checkVersion, updateChangelog);

gulp.task('bump:major', function() { return bump('major'); });
gulp.task('bump:minor', function() { return bump('minor'); });
gulp.task('bump:patch', function() { return bump('patch'); });

gulp.task('changelog', changelog);

gulp.task('tag', tag);
