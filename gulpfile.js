var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('myServer', function() {
  connect.server({
    root: './',
    port: 8001,
    host: '::',
    fallback: './index.html',
    livereload: true
  });
});
gulp.task('default', ['myServer']);
