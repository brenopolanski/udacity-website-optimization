# [Website Performance Optimization portfolio project](https://github.com/udacity/frontend-nanodegree-mobile-portfolio)

The task here was to optimize a mobile web app in order to make it load faster, reduce download speed and data traffic. Another issue that the project had originally, was the slow screen scroll speed and changing pizza size function.

To get started, check out the repository and inspect the code.

## Getting Started

### Installation

First of all, install the dependencies to run this website.

- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)

```sh
# Clone this repository
$ git clone git@github.com:brenopolanski/udacity-website-optimization.git
$ cd udacity-website-optimization

# install dependencies
$ yarn (or npm i)
# run tasks and serve
$ gulp
```

### Tasks

- `gulp`: Initialize watch for changes and a server ([localhost:3000](http://localhost:3000/));
- `gulp css`: Execute css files;
- `gulp js`: Execute js files;
- `gulp imagemin`: Compress image files;
- `gulp watch`: Call for watch files;
- `gulp browser-sync`: Serve files from `/www/`.

## Optimizations Performed

### Part 1: Optimize PageSpeed Insights score for `index.html`

- The loading of the stylesheets were deferred and performed via [script](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery): the css references were put inside a noscript tag, and they were loaded via script;
- The image sizes were explicitly written (to speed up page rendering);
- The `pizzeria.jpg` image was changed to a resized version of it (`pizzeria_thumb.jpg`);
- Placed scripts before tag closing `</body>`;
- Used Gulp to:
  * Minify HTML;
  * Minify CSS and merged;
  * Minify JS and merged;
  * Compress images files.

### Part 2: Optimize Frames per Second in `pizza.html`
