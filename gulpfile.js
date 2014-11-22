// Requirements
var gulp = require('gulp'),
browserSync = require('browser-sync'),
clean = require('gulp-clean'),
sass = require('gulp-ruby-sass'),
minifyCSS = require('gulp-minify-css'),
jade = require('gulp-jade'),
htmlmin = require('gulp-htmlmin'),
uglify = require('gulp-uglify'),
runSequence = require('run-sequence'),
glob = require('glob'),
uncss = require('gulp-uncss');

// Defines path to sass
var cssRootForSite = 'app/css/site/';
var cssRootForDist = 'dist/css/site/';
var cssRootForAdmin = 'app/css/admin/';
var sassRootForApp = 'app/sass/site/';
var sassRootForAdmin = 'app/sass/admin/';
var htmlRootForSite = 'app/partials/html/';
var indexRootForDist = 'dist/';
var partialRootForDist = 'dist/partials/html';

var reload = browserSync.reload;

//Directory paths
var paths = {
	scripts: ['js/**/*.js'],
	libs : {
		root : 'libs',
		requirejs : 'libs/requirejs/require.js',
		async : 'libs/requirejs-plugins/src/async.js',
		json : 'libs/requirejs-plugins/src/json.js',
		angular : 'libs/angular/angular.js',
		angularRoute : 'libs/angular-route/angular-route.js',
		angularMocks : 'libs/angular-mocks/angular-mocks.js',
		jquery : 'libs/jquery/dist/jquery.js',
		bootstrap : 'libs/bootstrap/dist/js/bootstrap.js',
		bootstrapCSS : 'libs/bootstrap/dist/css/bootstrap.min.css',
		text : 'libs/requirejs-text/text.js',
		firebase : 'libs/firebase/firebase.js',
		angularfire : 'libs/angularfire/dist/angularfire.min.js'  
	},
	styles: ['css/site/main.css', 'libs/bootstrap/dist/css/bootstrap.min.css'],
	html: ['index.html'],
	partials : ['partials/html/partial1.html', 'partials/html/partial2.html', 'partials/html/addWave.html'],
	images: ['images/**/*.png'],
	extras: [],
	data : ['js/data/locales.json']
};

//Base directories
var bases = {
	app : {
		root : 'app/',
		libs : {
			root : 'libs/',
			requirejs : 'requirejs/',
			async : 'requirejs-plugins/src/',
			json : 'requirejs-plugins/src/',
			angular : 'angular/',
			angularRoute : 'angular-route/',
			angularMocks : 'angular-mocks',
			jquery : 'jquery/dist/',
			bootstrapCSS : 'bootstrap/dist/css/',
			bootstrap : 'bootstrap/dist/js/',
			text : 'requirejs-text/',
			firebase : 'firebase/',
			angularfire : 'angularfire/dist/'
		},
		partials : 'partials/',
		data : 'data/'
	},
	styles : {
		css : 'css/site/',
		sass : 'sass/site/'
	},
	dist: {
		root : 'dist/',
		scripts : 'js/',
		libs : {
			root : 'libs/',
			requirejs : 'requirejs/',
			async : 'requirejs-plugins/src/',
			json : 'requirejs-plugins/src/',
			angular : 'angular/',
			angularRoute : 'angular-route/',
			angularMocks : 'angular-mocks',
			jquery : 'jquery/dist/',
			bootstrapCSS : 'bootstrap/dist/css/',
			bootstrap : 'bootstrap/dist/js/',
			text : 'requirejs-text/',
			firebase : 'firebase/',
			angularfire : 'angularfire/dist/'
		},
		styles : 'css/site',
		partials : 'partials/html/',
		images : 'images',
		extras : 'extras',
		data : 'data/'
	}
};

// Delete the dist directory
gulp.task('clean-dist', function() {
	return gulp.src(bases.dist.root)
		.pipe(clean());
});

//Copy Script Files
gulp.task('copy-scripts', function() {
	gulp.src(paths.scripts, {cwd: bases.app.root})
		.pipe(gulp.dest(bases.dist.root + bases.dist.scripts))
		.pipe(uglify({mangle : false}))
		.pipe(gulp.dest(bases.dist.root + bases.dist.scripts))
});

//Copy Library Files
gulp.task('copy-libs-requirejs', function() {
	gulp.src(bases.app.root + paths.libs.requirejs)
		.pipe(gulp.dest(bases.dist.root + bases.dist.libs.root + bases.dist.libs.requirejs));
});

gulp.task('copy-libs-async', function() {
	gulp.src(bases.app.root + paths.libs.async)
		.pipe(gulp.dest(bases.dist.root + bases.dist.libs.root + bases.dist.libs.async));
});

gulp.task('copy-libs-json', function() {
	gulp.src(bases.app.root + paths.libs.json)
		.pipe(gulp.dest(bases.dist.root + bases.dist.libs.root + bases.dist.libs.json));
});

gulp.task('copy-libs-angular', function() {
	gulp.src(bases.app.root + paths.libs.angular)
		.pipe(gulp.dest(bases.dist.root + bases.dist.libs.root + bases.dist.libs.angular));
});

gulp.task('copy-libs-angular-route', function() {
	gulp.src(bases.app.root + paths.libs.angularRoute)
		.pipe(gulp.dest(bases.dist.root + bases.dist.libs.root + bases.dist.libs.angularRoute));
});

gulp.task('copy-libs-angular-mocks', function() {
	gulp.src(bases.app.root + paths.libs.angularMocks)
		.pipe(gulp.dest(bases.dist.root + bases.dist.libs.root + bases.dist.libs.angularMocks));
});

gulp.task('copy-libs-jquery', function() {
	gulp.src(bases.app.root + paths.libs.jquery)
		.pipe(gulp.dest(bases.dist.root + bases.dist.libs.root + bases.dist.libs.jquery));
});

gulp.task('copy-libs-bootstrapCSS', function() {
	gulp.src(bases.app.root + paths.libs.bootstrapCSS)
		.pipe(gulp.dest(bases.dist.root + bases.dist.libs.root + bases.dist.libs.bootstrapCSS));
});

gulp.task('copy-libs-bootstrap', function() {
	gulp.src(bases.app.root + paths.libs.bootstrap)
		.pipe(gulp.dest(bases.dist.root + bases.dist.libs.root + bases.dist.libs.bootstrap));
});

gulp.task('copy-libs-text', function() {
	gulp.src(bases.app.root + paths.libs.text)
		.pipe(gulp.dest(bases.dist.root + bases.dist.libs.root + bases.dist.libs.text));
});

gulp.task('copy-libs-firebase', function() {
	gulp.src(bases.app.root + paths.libs.firebase)
		.pipe(gulp.dest(bases.dist.root + bases.dist.libs.root + bases.dist.libs.firebase));
});

gulp.task('copy-libs-angularfire', function() {
	gulp.src(bases.app.root + paths.libs.angularfire)
		.pipe(gulp.dest(bases.dist.root + bases.dist.libs.root + bases.dist.libs.angularfire));
});

//Copy Library Files
gulp.task('copy-libs', ['copy-libs-requirejs', 'copy-libs-async', 'copy-libs-json', 'copy-libs-angular', 'copy-libs-angular-route', 'copy-libs-angular-mocks', 'copy-libs-jquery', 'copy-libs-bootstrapCSS', 'copy-libs-bootstrap', 'copy-libs-text', 'copy-libs-firebase', 'copy-libs-angularfire'], function() {
	console.log('libraries copied.');
});

//Copy HTML files
gulp.task('copy-html', function() {
	gulp.src(paths.html, {cwd: bases.app.root})
		.pipe(gulp.dest(bases.dist.root));
});

//Copy Stylesheets
gulp.task('copy-styles-main', function() {
	gulp.src(paths.styles, {cwd: bases.app.root})
		.pipe(gulp.dest(bases.dist.root + bases.dist.styles));
});

//Copy Library-Stylesheets
gulp.task('copy-styles-libs', function() {
	gulp.src(paths.styles, {cwd: bases.app.libs.bootstrapCSS})
		.pipe(gulp.dest(bases.dist.root + bases.dist.libs.bootstrapCSS));
});

//Copy HTML Partials
gulp.task('copy-partials', function() {
	gulp.src(paths.partials, {cwd: bases.app.root})
		.pipe(gulp.dest(bases.dist.root + bases.dist.partials));
	gulp.src(cssRootForDist + 'main.css')
	  .pipe(uncss({html: ['dist/partials/html/partial1.html', 'dist/partials/html/partial2.html', 'dist/partials/html/addWave.html'] }))
	  .pipe(gulp.dest(cssRootForDist));
});

//Copy Images
gulp.task('copy-images', function() {
	gulp.src(paths.images, {cwd: bases.app.root})
		.pipe(gulp.dest(bases.dist.root + bases.dist.images));
});

//Copy HTML Extras
gulp.task('copy-extras', function() {
	gulp.src(paths.extras, {cwd: bases.app.root})
		.pipe(gulp.dest(bases.dist.root + base.dist.extras));
});

//Copy Data
gulp.task('copy-data', function() {
	gulp.src(paths.data, {cwd: bases.app.root})
		.pipe(gulp.dest(bases.dist.root + bases.dist.scripts + bases.dist.data));
});

// Gulp task for Site
gulp.task('sass-to-css-site', function(){
	return gulp.src(sassRootForApp + 'main.scss')
		.pipe(sass({sourcemap: true}))
		.pipe(gulp.dest('app/css/site'));
});

//Gulp task for watching Site
gulp.task('watch-sass-site', function(){

	gulp.watch('app/sass/site/main.scss', function() {
		gulp.run('sass-to-css-site');
		gulp.run('minify-css-site');//use sequence
	});

	//Base SASS Files
	gulp.watch(['app/sass/site/base/_common.scss', 
				'app/sass/site/base/_reset.scss', 
				'app/sass/site/base/_typography.scss', 
				'app/sass/site/components/_buttons.scss', 
				'app/sass/site/components/_dropdown.scss', 
				'app/sass/site/helpers/_functions.scss', 
				'app/sass/site/helpers/_helpers.scss', 
				'app/sass/site/helpers/_mixins.scss', 
				'app/sass/site/helpers/_variables.scss', 
				'app/sass/site/layout/_footer.scss', 
				'app/sass/site/helpers/_forms.scss', 
				'app/sass/site/layout/_grid.scss', 
				'app/sass/site/layout/_header.scss', 
				'app/sass/site/helpers/_sidebar.scss', 
				'app/sass/site/pages/_contact.scss', 
				'app/sass/site/themes/_default.scss', 
				'app/sass/site/pages/_bootstrap.scss'], function() {
		gulp.run('sass-to-css-site');
		gulp.run('minify-css-site');//use sequence
	});

});

//Gulp Task for Minifying Site
gulp.task('minify-css-site', function() {
  gulp.src(cssRootForSite + 'main.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest(cssRootForSite));
});

// Gulp task for Admin
gulp.task('sass-to-css-admin', function(){
	return gulp.src(sassRootForAdmin + 'main.scss')
		.pipe(sass({sourcemap: true}))
		.pipe(gulp.dest('app/css/admin'));
});

gulp.task('generate-jade-to-html', function() {
	gulp.src('./app/partials/jade/*.jade')
		.pipe(jade({pretty : true}))
		.pipe(gulp.dest('app/partials/html'));
});

//Gulp task for watching Admin
gulp.task('watch-sass-admin', function(){
	gulp.watch('app/sass/admin/main.scss', function() {
		gulp.run('sass-to-css-admin');
	});
});

//Gulp task for minifying Admin
gulp.task('minify-css-admin', function() {
  gulp.src(cssRootForAdmin + 'main.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest(cssRootForSite));
});

gulp.task('minify-partials', function() {
	gulp.src('dist/partials/html/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('dist/partials/html'));
});

//Gulp Task for Cleaning Unused CSS Selectors in Partials - Name Changed
gulp.task('uncss-partials', function() {
  gulp.src('./dist/css/site/main.css')
    .pipe(uncss({
      html: glob.sync('dist/partials/html/*.html')
    }))
    .pipe(gulp.dest('./dist/css/site'));
});

//Gulp Task for Cleaning Unused CSS Selectors in Partials - Name Changed
gulp.task('uncss-index', function() {
  gulp.src('./dist/css/site/main.css')
    .pipe(uncss({
      html: glob.sync('dist/index.html')
    }))
    .pipe(gulp.dest('./dist'));
});

//Gulp Task for Cleaning Unused CSS Selectors in Index File
gulp.task('clean-unused-main-styles', function() {
  gulp.src('./dist/css/site/main.css')
    .pipe(uncss({
      html: glob.sync('dist/index.html')
    }))
    .pipe(gulp.dest('./dist'));
});

//Gulp Task for Cleaning Unused CSS Selectors in Partials
gulp.task('clean-unused-partial-styles', function() {
  gulp.src('./dist/css/site/main.css')
    .pipe(uncss({
      html: glob.sync('dist/partials/html/*.html')
    }))
    .pipe(gulp.dest('./dist/css/site'));
});

gulp.task('generate-dist', function(callback) {
  runSequence(['copy-html', 'copy-scripts', 'copy-libs', 'copy-styles-main', 'copy-partials', 'copy-images', 'copy-data'], callback);
});

// Reload all Browsers
gulp.task('browser-reload', function () {
	browserSync.reload();
});

gulp.task('browser-sync', function () {
	var files = [
		'app/**/*.html',
		'app/**/*.json',
		'app/**/*.sass',
		'app/**/*.jade',
		'app/js/*.js',
		'app/**/js/*.js',
		'app/images/css/**/*.css',
	];
	browserSync.init(files, {
		server: {
			baseDir: './app'
		}
	});
});

// Watch jade, html, scss and js files.
gulp.task('default', ['browser-sync'], function () {
	gulp.watch("app/index.html", ['copy-partials', 'browser-reload']);
	gulp.watch("app/data/locales.json", ['browser-reload']);
  gulp.watch("app/partials/jade/*.jade", ['generate-jade-to-html', 'copy-partials', 'browser-reload']);
  gulp.watch("app/partials/html/*.html", ['copy-partials', 'browser-reload']);
	gulp.watch("app/sass/site/*.scss", ['sass-to-css-site', 'minify-css-site', 'copy-styles-main'], 'browser-reload');
	gulp.watch("app/sass/site/**/*.scss", ['sass-to-css-site', 'minify-css-site', 'copy-styles-main'], 'browser-reload');
	gulp.watch("app/sass/site/**/**/*.scss", ['sass-to-css-site', 'minify-css-site', 'copy-styles-main'], 'browser-reload');
	gulp.watch("app/js/*.js", ['copy-scripts', 'browser-reload']);
	gulp.watch("app/js/**/*.js", ['copy-scripts', 'browser-reload']);
	gulp.watch("app/images/*.png", ['copy-images', 'browser-reload']);
	gulp.watch("app/images/**/*.png", ['copy-images', 'browser-reload']);
	gulp.watch("app/images/*.jpg", ['copy-images', 'browser-reload']);
	gulp.watch("app/images/**/*.jpg", ['copy-images', 'browser-reload']);
	//Tasks for Distribution Directories
	gulp.watch("dist/partials/html/*.html", ['minify-partials']);
});