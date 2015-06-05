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
},
{
	method: "GET",
	path: "/scraper",
	handler:require("./handlers/scraper")
},
{
   method: "GET",
   path: "/proxy/{url}",
   handler:require("./handlers/proxy")
},
{
	method: "POST",
	path: "/scraper",
	handler: function(req, reply) {
		console.log(req.payload);
	}
}
];

module.exports = routes;
