import gulp from "gulp"
import concat from "gulp-concat"
import minifyCss from "gulp-minify-css"
import uglify from "gulp-uglify"
import babel from "gulp-babel"

//file paths
const CSS_PATH = "dev/css/**/*.css"
const SCRIPTS_PATH = "dev/js/**/*.js"
const DIST_PATH = "dist"

gulp.task("styles", function() {
  console.log("styles task")
  return gulp.src(CSS_PATH)
  .pipe(minifyCss())
  .pipe(gulp.dest(DIST_PATH + "/css"))
})

gulp.task("scripts", function(){
  console.log("scripts task")
  return gulp.src(SCRIPTS_PATH)
  .pipe(babel({
    presets: ["es2015"]
  }))
  .pipe(uglify())
  .pipe(concat("scripts.js"))
  .pipe(gulp.dest(DIST_PATH + "/js"))
})
