'use strict';

const gulp = require('gulp');
const argv = require('yargs').argv;
const exec = require('child_process').exec;

const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'del', 'path'],
  camelize: true
});

function npm() {
  return exec('npm install', {
    cwd: './landing'
  });
}

function buildHTML() {
  const prodBuild = argv.prod === true ? '--prod' : '';
  return exec(
    'gulp build ' + prodBuild, {
    cwd: './landing'
  });
}

const build = gulp.series(npm, buildHTML);

exports.build = build;
