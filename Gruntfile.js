module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          "prod/css/style.css": "src/scss/style.scss"
        }
      }
    },
	  postcss: {
        options: {
            map: true,
            processors: [
                require('autoprefixer')({
                    browsers: ['last 2 versions']
                })
            ]
        },
        dist: {
            src: 'prod/css/style.css'
        }
    },
    uglify: {
      dev: {
        files: {
          'prod/output.min.js': ['dist/**.js']
        }
      }
    },
    htmlmin: {                                     // Task
      prod: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'prod/index.html': 'dist/index.html',     // 'destination': 'source'
        }
      },
    },/*
    watch: {
      styles: {
        files: ['./src/scss/**.scss'], // which files to watch
        tasks: ['sass', 'postcss'],
        options: {
          nospawn: true
          interrupt: true,
          event: ['all']
        }
      },
      scripts: {
        files: ['Gruntfile.js', 'dist/**.js'],
        tasks: ['uglify'],
        options: {
          nospawn: true
          interrupt: true,
          event: ['all']
        }
      }
    }*/
  });
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default', ['sass', 'postcss', 'uglify', 'htmlmin:prod']);
};