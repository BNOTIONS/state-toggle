module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'galaxy.css': 'galaxy.scss',
                    'docs/css/galaxy.css': 'galaxy.scss',
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            dist: {
                files: [{
                    src: 'galaxy.css',
                    dest: 'galaxy.css'
                }]
            }
        },
        watch: {
            css: {
                files: ['components/*.scss', '*.scss'],
                tasks: ['sass', 'autoprefixer', 'cssmin'],
            }
        },
        cssmin: {
            combine: {
                files: {
                    'galaxy.min.css': ['galaxy.css']
                }
            }
        },
        uglify: {
            options: {
              banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
              src: 'js/<%= pkg.name %>.js',
              dest: 'docs/js/<%= pkg.name %>.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'watch']);
};
