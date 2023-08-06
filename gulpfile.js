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
const imagemin = require('gulp-imagemin')

const srcPath = "src/"
const distPath = "dist/"

const path = {
  build: {
    html: distPath + "pages/",
    css: distPath + "assets/css/",
    js: distPath + "assets/js/",
    images: distPath + "assets/images/",
    fonts: distPath + "assets/fonts/",
    video: distPath + "assets/video"
  },
  src: {
    html: srcPath + "pages/*.html",
    css: srcPath + "blocks/**/*.css",
    js: srcPath + "/**/*.js",
    images: srcPath + "images/*.{jpg,png,svg,jpeg}",
    fonts: srcPath + "fonts/static/*.{eot,woff,woff2,ttf,svg}",
    video: srcPath + "video/*.mp4"
  },
  watch: {
    html: srcPath + "pages/*.html",
    css: srcPath + "blocks/**/*.css",
    js: srcPath + "blocks/**/*.js",
    images: srcPath + "images/*.{jpg,png,svg,jpeg}",
    fonts: srcPath + "fonts/static/*.{eot,woff,woff2,ttf,svg}",
    video: srcPath + "video/*.mp4"
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
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({progressive: true}),
        imagemin.optipng({optimizationLevel: 5})  
      ]))
    .pipe(dest(path.build.images))
}

function video() {
  return src(path.src.video)
    .pipe(dest(path.build.video))
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
  gulp.watch([path.watch.video],video)
}

const build = gulp.series(clean,gulp.parallel(html,js,css,images,fonts, video))
const watch = gulp.parallel(build,watchFiles)

exports.html = html
exports.js = js
exports.css = css 
exports.fonts = fonts
exports.images = images
exports.video = video
exports.clean = clean
exports.build = build
exports.watch = watch