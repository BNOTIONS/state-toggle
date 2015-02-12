module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserSync: {
            dev: {
                bsFiles: {
                    src: ['*', '**/*']
                },
                options: {
                    proxy: "localhost:9000"
                }
            }
        },
        harp: {
            server: {
                server: true,
                source: 'src'
            },
            dist: {
                source: 'src',
                dest: 'build'
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-harp');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['browserSync', 'harp', 'watch']);
};
