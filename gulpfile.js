/* insertaremos en variables todos los elementos de dependecias que necesitaremos en nuestro task*/
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var webserver = require('gulp-webserver');

/* Concatenaremos nuestros archivos js para convertirlos en script.js que se guardara en una carpeta dist*/
gulp.task('script', function(){
	gulp.src(['node_modules/jquery/dist/jquery.js' /*, 'node_modules/materialize-css/dist/js/materialize.js' */, 'assets/js/*.js'])
	.pipe(concat('script.js'))
	//carta dist
	.pipe(gulp.dest('dist/js/'));
});
/* configuramos style que concatenara main.scss pasadon a ser style.min.css*/
gulp.task('style', function(){
	gulp.src([ /*'node_modules/materialize-css/dist/css/materialize.css', */'assets/sass/main.scss'])
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCSS())
	.pipe(concat('style.min.css'))
	.pipe(gulp.dest('dist/css/'));
});

/* Creación del servidor */
gulp.task('webserver', function(){
	gulp.src('../pinterest/')
	.pipe(webserver({
		fallback: 'index.html',
		livereload: true,
		directoryListing: false,
		open: true,
		port: 8001
	}));
});

gulp.task('watch', function(){
	gulp.watch('assets/sass/*.scss', ['style']);
});

/* indicador de tareas a ejecutar al correr el comendo glup en la terminal*/

gulp.task('default', ['script', 'style', 'webserver', 'watch']);