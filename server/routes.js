var routes = [
	{
	  method: "GET",
	  path:"/assets/{param*}",
	  handler: {
	    directory:{
	      path: "build"
	    }
	  }
	},
	{
    method: "GET",
    path:"/",
    handler:require("./handlers/welcome")
  }
];

module.exports = routes;
