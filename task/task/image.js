/** ------------------------------------------------------------------------- *\
 *  IMAGE
 ** ------------------------------------------------------------------------- */

var gulp       = require('gulp')
,   changed    = require('gulp-changed')
,   config     = require( '../conf' );

gulp.task('image', function() {
  return gulp.src(config.image.src)
    .pipe(changed(config.image.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.image.dest));
});