const gulp = require('gulp');
const compass = require('gulp-compass') ;
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const minifyCSS = require('gulp-minify-css');

const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

const chalk = require('chalk');

/*
	`gulp default`
	sasss , js , watch
*/
gulp.task('sass',function(){
	return gulp.src(['./sass/**/*.scss'])
		.pipe(plumber())
		.pipe(compass({
			config_file: './config.rb',
    	css: './dist/css',
    	sass: 'sass',
    	time: true
    	// comments: false
		}))
		.pipe(minifyCSS()) // 若加入這行，代表 sourcemap 會沒用（因為註解都消失了）
		.pipe(gulp.dest('dist/css'))
})

gulp.task('js', function(){
	return gulp.src(['./js/**/*.js'])
		.pipe(plumber())	
		.pipe(babel({
      presets: ['es2015']
    }))
    /* -- TODO --
     MINIFY js ,if readt to online!!
		*/
		.pipe(uglify())
		.pipe(rename(function(path){
			logPath(path , "yellow");
    }))
		.pipe(gulp.dest('dist/js'))
})

gulp.task('watch',function(){
	gulp.watch(['./sass/**/*.scss'], ['sass']);
  gulp.watch(['./js/**/*.js'], ['js']);
})

gulp.task('default',['sass','js','watch']);


/*
	`gulp concate`
	All 'lib' css to all.min.css
	All 'lib' js to all.min.js
  When you need , then you do it .
  -
	If u need to concat , u can rewrite minify-css like this... 
  gulp.task('minify-css',['concate-css'],function(){
    ...
  })
*/
gulp.task('concate-css', function () {
  gulp.src(['src/*.css'])
  	.pipe(plumber())
   	.pipe(concat('all.css'))
    .pipe(gulp.dest('lib/'));
});

gulp.task('concate-js', function () {
  gulp.src(['src/*.js'])
  	.pipe(plumber())
   	.pipe(concat('all.js'))
    .pipe(gulp.dest('lib/'));
});

gulp.task('minify-css', function(){
	gulp.src(['src/**/*.css'])
		.pipe(plumber())
		.pipe(minifyCSS({
			keepBreaks: true,
		}))
		.pipe(rename(function(path){
    	path.basename += ".min" ;
    	path.extname = ".css";

    	logPath(path , "green");
    }))
		.pipe(gulp.dest('lib/'))
})

gulp.task('minify-js', function(){
	gulp.src(['src/**/*.js'])
		.pipe(plumber())
		.pipe(uglify())
		.pipe(rename(function(path){
			path.basename += '.min' ;
			path.extname = '.js' ;

			logPath(path,"yellow");
		}))
		.pipe(gulp.dest('lib/'))
})

/*
	`gulp image` 
	When your project is completed , you can compress images
*/
gulp.task('image', function () {
  gulp.src('dist/img/**/**')
  	.pipe(plumber())
   	.pipe(imagemin())
    .pipe(gulp.dest('dist/img/'));
});



function logPath(path , color) {
	switch(color){
		case "red":
			color = "31" ;
			break ;
		case "green":
			color = "32" ;
			break ;
		case "yellow":
			color = "33" ;
			break ;
		case "blue":
			color = "34" ;
			break ;
		case "purple":
			color = "35" ;
			break ;
		case "sky-blue":
			color = "36" ;
			break ;
		case "white":
			color = "37" ;
			break ;
	}

  if (path.dirname === ".")
    console.log("\n \033["+color+"m finish \033[0m '" + path.basename + path.extname + "'");
  else
    console.log("\n \033["+color+"m finish \033[0m '" + path.dirname + path.basename + path.extname + "'");
}
