'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        themeAssets: 'hbp-sphinx-theme/assets',

        subgrunt: {
            theme: {
                'hbp-sphinx-theme': 'default',
            },
        },

        clean: [ 'build/' ],

        watch: {
            rst: {
                files: ['doc/index.rst'],
                tasks: ['exec:buildDoc'],
                options: { livereload: '<%= connect.options.livereload %>' }
            },
            js: {
                files: ['<%= themeAssets %>/*.js'],
                tasks: ['build'],
                options: { livereload: '<%= connect.options.livereload %>' }
            },
            scss: {
                files: ['<%= themeAssets %>/*.scss'],
                tasks: ['build'],
                options: { livereload: '<%= connect.options.livereload %>' }
            }
        },

        connect: {
            options: {
                port: 8480,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 34480
            },
            livereload: {
                options: {
                    open: true,
                    base: [ 'build/' ]
                }
            }
        },

        exec: {
          buildDoc: 'venv/bin/sphinx-build doc build'
        }
    });

    grunt.registerTask('build', ['clean', 'subgrunt', 'exec:buildDoc']);
    grunt.registerTask('serve', ['build', 'connect:livereload', 'watch']);
};
