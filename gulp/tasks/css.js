'use strict';

// Necessary Plugins
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker     = require('css-mqpacker');
var csswring     = require('csswring');
var csscomb      = require('gulp-csscomb');
var concatCSS    = require('gulp-concat-css');
var paths        = require('../paths');

// Call CSS
module.exports = gulp.task('css', function() {
  var processors = [
    autoprefixer({ browsers: ['last 3 versions'] }),
    mqpacker,
    csswring
  ];
  return gulp.src(paths.source.css)
    .pipe(plumber())
    .pipe(concatCSS('style.css'))
    .pipe(csscomb())
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.dist.css));
});
