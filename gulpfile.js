var nexe = require('nexe');
var gulp = require('gulp');


gulp.task('build', [], cb => {

	var browserifyExcludes = [];
	browserifyExcludes.push('fsevents');


	var options = {
		input: "./index.js",
		output: 'target/inquire.exe',
		nodeTempDir: "./tmp",
		nodeVersion: "4.2.3",
		flags: false,
		framework: "nodejs",
		debug: true,
		browserifyExcludes: browserifyExcludes
	};

    nexe.compile( options, ( err ) => {
        console.log( err );
        cb( err );
    } );
});