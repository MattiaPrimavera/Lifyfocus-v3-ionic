var gulp = require('gulp');
var rename = require('gulp-rename');
const env = process.env.NODE_ENV;
const TEMPLATES_PATH = './gulp_templates';

gulp.task('environment', function () {
  return gulp.src(`${TEMPLATES_PATH}/environment.${env}.js`)
    .pipe(rename('environment.js'))
    .pipe(gulp.dest('./src/app'))
});

gulp.task('default', ['environment'])
