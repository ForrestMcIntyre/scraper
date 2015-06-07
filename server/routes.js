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
	handler:require("./handlers/scraperGet")
},
{
   method: "GET",
   path: "/proxy/{url}",
   handler:require("./handlers/proxy")
},
{
	method: "POST",
	path: "/scraper",
	handler:require("./handlers/scraperPost")
}
];

module.exports = routes;
