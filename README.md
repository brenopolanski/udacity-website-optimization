# [Website Performance Optimization portfolio project](https://github.com/udacity/frontend-nanodegree-mobile-portfolio)

The task here was to optimize a mobile web app in order to make it load faster, reduce download speed and data traffic. Another issue that the project had originally, was the slow screen scroll speed and changing pizza size function.

To run, you can either navigate to http://brenopolanski.com/udacity-website-optimization/, or install the project on your machine.

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
- `gulp html`: Execute html files;
- `gulp css`: Execute css files;
- `gulp js`: Execute js files;
- `gulp imagemin`: Compress image files;
- `gulp watch`: Call for watch files;
- `gulp browser-sync`: Serve files from `/www/`;
- `gulp deploy`: Deploy compiled files at `dist/` to github on branch `gh-pages`.

## Optimizations Performed

### Part 1: Optimize PageSpeed Insights score for `index.html`

- The loading of the stylesheets were deferred and performed via [script](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery): the css references were put inside a noscript tag, and they were loaded via script;
- The image sizes were explicitly written (to speed up page rendering);
- The `pizzeria.jpg` image was changed to a resized version of it (`pizzeria_thumb.jpg`);
- Use [Web Font Loader](https://github.com/typekit/webfontloader) to load the [Google web fonts](https://fonts.google.com/) asynchronously;
- Placed scripts before tag closing `</body>`;
- Used Gulp to:
  * Minify HTML;
  * Minify CSS and merged;
  * Minify JS;
  * Compress images files.

### Part 2: Optimize Frames per Second in `pizza.html`

- Save array size;
- Changed `querySelector()` to `getElementById()`;
- Changed `querySelectorAll` to `getElementsByClassName()`;
- Set number of pizzas to 36 in `document.addEventListener('DOMContentLoaded', function()`;
- Lots of arrays and dictionaries were created on the top of the script to store everything that could be precalculated, like the sliding pizzas elements, the phases values, the random pizzas elements, the pizza sizes texts, and the percentual pizza size;
- The `resizePizzas` function was changed to avoid requering the DOM elements and the new width calculation was moved to outside the loop, to improve the computational complexity;
- Declaring the variable `items` outside the function so as to reduce the scripting time taken;
- Move `var pizzasDiv = document.getElementById("randomPizzas");` out of the for loop so the loop only makes one DOM call;
- Declare `var elem` outside the loop to prevent it being created each iteration;
- Declare `var movingPizzas` outside the for loop to prevent a DOM call on each iteration;
- Calculate number of pizzas based on window size.
