var gulp = require('gulp');

var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('scripts', function () {
	return browserify('./src/main.js')
		// .exclude('jquery')
		.bundle()
		.pipe(source('dependency.js'))
        .pipe(gulp.dest('./'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./src/**/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);
gulp.task('all', ['scripts']);