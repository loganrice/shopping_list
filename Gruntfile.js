module.exports = function (grunt) {
  require('load-grunt-config')(grunt);

	// Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'watch']);
  grunt.registerTask('dist', ['uglify', 'sass']);
};