module.exports = function(grunt){

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks("grunt-nodemon");

  grunt.registerTask("default", "nodemon");

  grunt.initConfig({
    nodemon:{
      script: "index.js"
    }
  });
};
