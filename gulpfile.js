var gulp = require('gulp');

var browserify = require('browserify');
var shim = require('browserify-shim');
var source = require('vinyl-source-stream');

gulp.task('scripts', function () {
	return browserify('./src/main.js')
		// .exclude('jquery')
		.transform(shim)
		.bundle()
		.pipe(source('dependency.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('scripts-with-deps', function () {
	return browserify('./src/main.js')
		.bundle()
		.pipe(source('dependency-bundle.js'))
        .pipe(gulp.dest('./'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./src/**/*.js', ['scripts', 'scripts-with-deps']);
});

gulp.task('default', ['scripts', 'scripts-with-deps', 'watch']);
gulp.task('all', ['scripts', 'scripts-with-deps']);