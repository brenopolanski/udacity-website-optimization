'use strict';

// Necessary Plugins
var gulp  = require('gulp');
var paths = require('../paths');

// Call Watch
module.exports = gulp.task('watch', function() {
  gulp.watch(paths.source.html, ['html']);
  gulp.watch(paths.source.css, ['css']);
  gulp.watch(paths.source.js, ['js']);
  gulp.watch(paths.source.img, ['imagemin']);
});
