"use strict"

const {src , dest, series} = require('gulp');
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const del = require('del'); 
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const csso = require('gulp-csso');

const srcPath = "src/"
const distPath = "dist/"

const path = {
  build: {
    html: distPath + "pages/",
    css: distPath + "assets/css/",
    js: distPath + "assets/js/",
    images: distPath + "assets/images/",
    fonts: distPath + "assets/fonts/"
  },
  src: {
    html: srcPath + "html/*.html",
    css: srcPath + "blocks/**/*.css",
    js: srcPath + "/**/*.js",
    images: srcPath + "images/*.{jpg,png,svg}",
    fonts: srcPath + "fonts/*.{eot,woff,woff2,ttf,svg}"
  },
  watch: {
    html: srcPath + "html/*.html",
    css: srcPath + "blocks/**/*.css",
    js: srcPath + "blocks/**/*.js",
    images: srcPath + "images/*.{jpg,png,svg}",
    fonts: srcPath + "fonts/*.{eot,woff,woff2,ttf,svg}"
  },
  clean: "./" + distPath
}

function html() {
  return src(path.src.html)
    .pipe(plumber())
    .pipe(dest(path.build.html))
}

function css() {
  return src(path.src.css)
    .pipe(plumber())
    .pipe(concat('bundle.css'))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(csso())
    .pipe(dest(path.build.css))
}

function js() {
  return src(path.src.js)
    .pipe(plumber())
    .pipe(babel())
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(dest(path.build.js))
}

function fonts() {
  return src(path.src.fonts)
    .pipe(dest(path.build.fonts))
}

function images() {
  return src(path.src.images)
    .pipe(dest(path.build.images))
}

function clean() {
  return del(path.clean)
}

function watchFiles() {
  gulp.watch([path.watch.html], html),
  gulp.watch([path.watch.css], css),
  gulp.watch([path.watch.js], js),
  gulp.watch([path.watch.fonts],fonts)
  gulp.watch([path.watch.images],images)
}

const build = gulp.series(clean,gulp.parallel(html,js,css,images,fonts))
const watch = gulp.parallel(build,watchFiles)

exports.html = html
exports.js = js
exports.css = css 
exports.fonts = fonts
exports.images = images
exports.clean = clean
exports.build = build
exports.watch = watch