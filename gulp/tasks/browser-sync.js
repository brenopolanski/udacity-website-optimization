'use strict';

// Necessary Plugins
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var paths       = require('../paths');

// Serve files from /www/
module.exports = gulp.task('browser-sync', function() {
  var files = [
    paths.browserSync.html,
    paths.browserSync.css,
    paths.browserSync.js,
    paths.browserSync.img
  ];

  browserSync.init(files, {
    server: {
      baseDir: paths.dist.html
    }
  });
});
