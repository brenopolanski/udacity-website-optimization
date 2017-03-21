'use strict';

// Necessary Plugins
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var htmlmin = require('gulp-htmlmin');
var paths   = require('../paths');

// Call HTML
module.exports = gulp.task('html', function() {
  return gulp.src(paths.source.html_files)
    .pipe(plumber())
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
      minifyURLs: true
    }))
    .pipe(gulp.dest(paths.dist.html));
});
