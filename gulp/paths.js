'use strict';

module.exports = {
  source: {
    html_files: './src/**/*.html',
    css: './src/css/**/*.css',
    js: './src/js/**/*.js',
    img: './src/img/**/*'
  },

  browserSync: {
    html: './dist/**/*.html',
    css: './dist/css/**/*.css',
    js: './dist/js/**/*.js',
    img: './dist/img/**/*'
  },

  dist: {
    html: './dist/',
    css: './dist/css/',
    js: './dist/js/',
    img: './dist/img/'
  }
};
