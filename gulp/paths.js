'use strict';

module.exports = {
  source: {
    html: './src/**/*.html',
    css: './src/css/**/*.css',
    js: './src/js/**/*.js',
    img: './src/img/**/*',
    files: {
      cssHome: ['./src/css/print.css', './src/css/style.css'],
      cssPizza: ['./src/css/bootstrap-grid.css', './src/css/style-pizza.css']
    }
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
