// Setup an	d sync
var gulp = require("gulp"),
	bsync = require("browser-sync").create(),
	sass = require("gulp-sass"),
	aprefix = require("autoprefixer"),
	postcss = require("gulp-postcss");
// gulp.task("task_name, [depedencies]", function(){});
// Inicio Server
gulp.task("serve", function () {
	return bsync.init({
		server: {
			baseDir: "./"
		},
		online: false
	});
});
// Auto refresh
gulp.task("run", ["serve"], function () {
	gulp.watch("*.html").on("change", bsync.reload)
	gulp.watch("JS/*.js").on("change", bsync.reload)
	gulp.watch("SASS/*.scss", ["sass"])
	gulp.watch("CSS/*.css").on("change", bsync.reload)
})
gulp.task("sass", function () {
	return gulp.src("SASS/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(postcss([aprefix("Last 2 versions")]))
		.pipe(gulp.dest("CSS/"))
		.pipe(bsync.reload({
			stream: true
		}))
});