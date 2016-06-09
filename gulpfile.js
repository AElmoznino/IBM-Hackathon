var gulp = require('gulp'),
    connect = require('gulp-connect'),
    install = require('gulp-install'),
    browserify = require('browserify'),
    minify = require('gulp-minify'),
    purify = require('gulp-purifycss'),
    source = require('vinyl-source-stream'),
    exec = require('child_process').exec;

gulp.task('server', function (cb) {
  // exec('mongod', function (err, stdout, stderr) {
  //   console.log(stdout);
  //   console.log(stderr);
  //   cb(err);
  // });
  exec('node server.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('watch', function () {
  gulp.watch('./public/js/**/*.js', ['browserify']);
  gulp.watch('./public/app/main/main.js', ['compress']);
  gulp.watch('./public/css/*.css', ['purify']);
});

gulp.task('install', function () {
  gulp.src(['./package.json'])
      .pipe(install());
});

gulp.task('browserify', function() {
  // Grabs the app.js file
    return browserify('./public/js/app.js')
      // bundles it and creates a file called main.js
      .bundle()
      .pipe(source('main.js'))
      // saves it the public/js/ directory
      .pipe(gulp.dest('./public/app/main/'));
});

gulp.task('compress', function() {
  gulp.src('./public/app/main/main.js')
      .pipe(minify({
          ext:{
              src:'-debug.js',
              min:'-min.js'
          },
          exclude: ['tasks'],
          ignoreFiles: ['.combo.js', '-min.js']
      }))
      .pipe(gulp.dest('./public/app/min/'));
});

gulp.task('purify', function() {
  gulp.src('./public/css/style.css')
      .pipe(purify(['./public/app/**/*.js', './public/**/*.html']))
      .pipe(gulp.dest('./public/app/css/'));
});

gulp.task('default', ['install', 'watch', 'purify', 'browserify', 'compress', 'server']);
// gulp.task('default', ['install', 'server']);
