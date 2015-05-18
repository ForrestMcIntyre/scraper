module.exports = function(grunt){

	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks("grunt-concurrent");
	grunt.loadNpmTasks("grunt-nodemon");

	grunt.initConfig({
		concurrent:{
			dev:{
				tasks: ["watch", "nodemon"],
				options: {
					logConcurrentOutput: true
				}
			}
		},
		nodemon:{
			script: "index.js"
    },
    less:{
    	dev:{
    		options:{
    			paths: ["src/less"]
    		},
    		files:[{
    			expand: true,
    			cwd: "src/less",
    			src: ["**/*.less"],
    			dest: "src/css",
    			ext: ".css"
    		}]
    	}
    },
    autoprefixer:{
    	dev:{
    		expand: true,
    		flatten: true,
    		src: "src/css/**/*.css",
    		dest: "build/css/"
    	}
    },
    watch:{
    	options:{
    		livereload:true
    	},
    	less:{
    		files: "src/**/*.less",
    		tasks: ["less"]
    	},
    	css:{
    		files: "src/**/*.css",
    		tasks: ["autoprefixer"]
    	},
    	html:{
    		files: "**/*.html",
    		tasks: []
    	}
    }
  });

  grunt.registerTask("default", ["autoprefixer", "less", "concurrent"]);
};
