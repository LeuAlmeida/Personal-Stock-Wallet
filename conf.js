/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

const argv = require('yargs').argv;

let base = '/';
let dist = 'dist';
if(argv.prod) {
  base = '/cryptum/demo/';
  dist = 'dist/demo';
} else if(argv.dev) {
  base = '/cryptum/demo/';
  dist = 'dist/demo';
}

/**
 *  The main paths of your project handle these with care
 */

exports.strings = [
];

exports.target = {
  src: 'src',
  dist: dist
};

exports.paths = {
  src: exports.target.src,
  dist: exports.target.dist
};

exports.data = {
  base: base
};

exports.layouts = [
  {
    layout: 'classic',
    outputFolder: '',
  }
];

exports.separator = '-';
