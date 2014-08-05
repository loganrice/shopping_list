module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: ['bower_components/jquery/dist/jquery.js', 'js/app.js'], // input
        dest: 'js/build/global.min.js' // output
      }
    },
    watch: {
      options: { livereload: true },
      sass: {
        files: ['./css/**/*.scss', './css/*.scss'],
        tasks: ['sass']
      }
    },
    sass: {
      dist: {                            
        options: {                       
          style: 'compressed'
        },
        files: {                         
          'css/build/global.css': 'css/global.scss'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
   //  SASS
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass']);

};