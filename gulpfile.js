
var gulp = require('gulp'),
		connect = require('gulp-connect');

	gulp.task('serve', function(){
		connect.server({
			root: 'www'
		});
	});

gulp.task('default', ['serve']);
