'use strict';

var gulp = require('gulp')
var concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify')
var imagemin = require('gulp-imagemin')
var rename = require('gulp-rename')
var babel = require('gulp-babel');
var htmlmin = require('gulp-htmlmin');
var webp = require('gulp-webp');
var responsive = require('gulp-responsive')


var baseDir = "./src"
var targetDir = "./"

gulp.task('sass:watch', function() {
    gulp.watch(baseDir + '/**/*.scss', gulp.series('sass'));
});

gulp.task('js', function() {
    return gulp.src(baseDir + "/js/**/*.js")
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('concat.js')) //this will concat all the files into concat.js
    .pipe(gulp.dest(baseDir + "/concat")) //this will save concat.js in a temp directory defined above
    .pipe(rename('index.js')) //this will rename concat.js to index.js
    .pipe(uglify()) //this will uglify/minify uglify.js
    .pipe(gulp.dest(targetDir + "/js"));
})

gulp.task('js:watch', function() {
    gulp.watch(baseDir + '/js/**/*.js', gulp.series('js'))
})
gulp.task('watch', function() {
    gulp.watch(baseDir + '/js/**/*.js', gulp.series('js'))
    gulp.watch(baseDir + '/css/**/*.css', gulp.series('css'))
})

gulp.task('css', () => {
    return gulp.src(baseDir + '/css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest(targetDir));
});

gulp.task('imagemin', function() {
    return gulp.src(baseDir + '/assets/*')
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest(targetDir + 'public'))
})

gulp.task('image-responsive', function() {
    return gulp.src(baseDir + '/assets/*')
    .pipe(responsive({
        '*.png': [
            {
                width: 200,
                rename: { suffix: '-200px' }
            },
            {
                width: 500,
                rename: { suffix: '-500px' }
            },
            {
                width: 800,
                rename: { suffix: '-800px' }
            }
        ]
    }))
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest(targetDir + "public"))
})

gulp.task('imageNextGen', function() {
    return gulp.src(targetDir + 'public/*')
    .pipe(webp())
    .pipe(gulp.dest(targetDir + "public"))
})
 
gulp.task('html', () => {
  return gulp.src(baseDir + '/html/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(targetDir));
});