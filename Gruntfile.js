// Gruntfile.js
module.exports = function(grunt) {

  grunt.initConfig({

    // JS TASKS ================================================================
    // check all js files for errors
    jshint: {
      all: ['public/src/js/**/*.js'] 
    },

  // take all the js files and minify them into app.min.js
    uglify: {
      build: {
        files: {
          'public/dist/js/app.min.js': ['public/src/js/**/*.js', 'public/src/js/*.js']
          // 'public/dist/js/app.min.js': ['public/src/js/index.js']
        }
      }
    },

    // // CSS TASKS ===============================================================
    // // process the less file to style.css
    sass: {
      dist: {
        files: {
          // 'public/dist/css/custfoundation.css': 'public/src/stylesheets/custfoundation.scss',
          'public/dist/css/style.css': 'public/src/stylesheets/style.scss'
        }        
      }
    },

  // // take the processed style.css file and minify
    cssmin: {
      build: {
        files: {
          // 'public/dist/css/custfoundation.min.css': 'public/dist/css/custfoundation.css',
          'public/dist/css/style.min.css': 'public/dist/css/style.css'
        }
      }
    },

    // COOL TASKS ==============================================================
    // watch css and js files and process the above tasks
    watch: {
     css: {
        files: ['public/src/stylesheets/*.scss', 'public/src/stylesheets/scss/*.scss'],
        tasks: ['sass', 'cssmin']
      },
      js: {
        files: ['public/src/js/**/*.js'],
        tasks: ['jshint', 'uglify']
      }
    },

  // watch our node server for changes
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

  // run watch and nodemon at the same time
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    }   

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('default', ['sass', 'cssmin', 'jshint', 'uglify', 'concurrent']);

};