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
}
];

module.exports = routes;
