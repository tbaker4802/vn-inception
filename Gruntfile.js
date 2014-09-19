// Generated on 2014-06-16 using generator-angular 0.8.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Define the configuration for all the tasks
	grunt.initConfig({

		pkg  : grunt.file.readJSON('package.json'),

		// Empties folders to start fresh
		clean: {
			dist: {
				files: [
					{
						dot: true,
						src: [
							'dist/*'
						]
					}
				]
			}
		},

		// Copies remaining files to places other tasks can use
		copy : {
			dist: {
				files: [
					{
						expand: true,
						dot   : true,
						cwd   : 'src/',
						dest  : 'dist/',
						src   : [
							'theme-dream.js'
						]
					}
				]
			}
		},

		dist: {
			options: {
				base: '<%= yeoman.dist %>'
			}
		},


		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all    : [
				'Gruntfile.js',
				'/src/theme-dream.js'
			],
			test   : {
				options: {
					jshintrc: 'test/.jshintrc'
				},
				src    : ['test/spec/theme-dream.spec.js']
			}
		},

		// Test settings
		karma : {
			jasmine: {
				configFile: 'karma.conf.jasmine.js',
				singleRun : true
			}
		},

		uglify: {
			options: {
				mangle  : true,
				compress: true,
				wrap    : true
			},
			scripts: {
				files: {
					'dist/theme-dream.min.js': ['src/theme-dream.js']
				}
			}
		}
	});

	grunt.registerTask('build', function () {
		grunt.task.run([
			'clean:dist',
			'newer:jshint:all',
			'copy:dist',
			'uglify'
		]);
	});

	grunt.registerTask('default', [
		'build'
	]);
};
