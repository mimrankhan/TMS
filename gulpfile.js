var gulp = require('gulp');
var ts = require('gulp-typescript');
var rimraf = require('gulp-rimraf');
var nodemon = require('gulp-nodemon');


//removeing built folder
gulp.task('cleanbuilt', function(){
	gulp.src('built/*').pipe(rimraf());
});


//transpiling and saving all ts files in built folder
gulp.task('builtserver', ['cleanbuilt'], function(){
	var tsResult = gulp.src('src/**/*.ts')
    .pipe(ts({
        module: 'CommonJS'
      }));
  return tsResult.js.pipe(gulp.dest('built/'));
});

gulp.task('nodemon', ['builtserver', 'watch'], function(){
    nodemon({
        script: './built/app.js'
    }).on('restart', function(){
        console.log('nodemon restarted server.js');
    })
})

gulp.task('watch', function(){
	gulp.watch('src/*.ts', ['builtserver']);
});
gulp.task('default', ['builtserver']);

