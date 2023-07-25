const gulp = require('gulp');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');

// Задача для минификации JavaScript
gulp.task('uglify', () => {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Задача для минификации HTML
gulp.task('htmlmin', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

// Задача для автопрефиксера
gulp.task('autoprefixer', () => {
  return gulp.src('src/css/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'));
});

// Задача для отслеживания изменений и запуска соответствующих задач
gulp.task('watch', () => {
  gulp.watch('src/js/*.js', gulp.series('uglify'));
  gulp.watch('src/*.html', gulp.series('htmlmin'));
  gulp.watch('src/css/*.css', gulp.series('autoprefixer'));
});

// Задача, которая будет выполняться по умолчанию при запуске gulp
gulp.task('default', gulp.series('uglify', 'htmlmin', 'autoprefixer', 'watch'));