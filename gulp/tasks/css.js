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

var processors = [
  autoprefixer({ browsers: ['last 3 versions'] }),
  mqpacker,
  csswring
];

// Call CSS Home
gulp.task('cssHome', function() {
  gulp.src(paths.source.files.cssHome)
    .pipe(plumber())
    .pipe(concatCSS('style.css'))
    .pipe(csscomb())
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.dist.css));
});

// Call CSS Pizza
gulp.task('cssPizza', function() {
  gulp.src(paths.source.files.cssPizza)
    .pipe(plumber())
    .pipe(concatCSS('style-pizza.css'))
    .pipe(csscomb())
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.dist.css));
});

// Call CSS
module.exports = gulp.task('css', ['cssHome', 'cssPizza']);
