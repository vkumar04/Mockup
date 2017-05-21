var glup = require('glup');
var util = require('gulp-util');
var browserSync = require('browser-sync').create();


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default',['browser-sync'], function(){

});
