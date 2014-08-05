module.exports = {
	sass: {
		files: ['./css/**/*.scss', './css/*.scss'],
		tasks: ['sass']
	},
	livereload: {
		options: {
			livereload: true
		},
		files: ['./css/build/**']
	}
};