var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var taskListing = require('gulp-task-listing');

gulp.task('help', taskListing);
gulp.task('default', ['help']);
gulp.task('lint', function () {gulp.src(['src/**/*.js']).pipe(jshint())});

gulp.task('start:develop', function () {
  nodemon({ script: 'index.js', ext: 'html js', env: { 'NODE_ENV': 'development' }, ignore: [''], tasks: ['lint'] })
  .on('restart', function () {
    console.log('restarted!');
  });
});