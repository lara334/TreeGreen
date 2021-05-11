// const { series } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
// const cleanCss = require("gulp-clean-css");


function html() {
  return gulp.src('./*.html')
      .pipe(browserSync.stream());
}
function style() {
   //1. where is my scss file (donde esta mi archivo)
  return gulp.src('./scss/**/*.scss')
      //2.pass that file through sass compiler (pase ese archivo scss)
      .pipe(sass())
      // .pipe(cleanCss({ format: 'keep-breaks' }))
      // .pipe(rename('main.min.css'))
      //3. where do i save the compiled css (donde guardo el CSS compilado)
      .pipe(gulp.dest('./dist/css')) 
      //4. stream changes to all browser ( cambios de flujo en todos los navegadores)
      .pipe(browserSync.stream());
}
function watch() {
  browserSync.init({
    server:{
      baseDir:'./'
    }
  });
  
  gulp.watch('./scss/*.scss',style);
  gulp.watch('./html').on('change', browserSync.reload);
  
}

// function transpile(cb) {
//     // body omitted
//     cb();
//   }
  
  // function bundle(cb) {
  //   // body omitted
  //   cb();
  // }
  
  // exports.build = series(transpile, bundle);
exports.html = html;
exports.style = style;
exports.watch = watch;
// exports.js = js;
// exports.watchForBuildAssets = watchForBuildAssets;
// exports.server = server;
// exports.default = parallel(this.server, this.watchForBuildAssets);