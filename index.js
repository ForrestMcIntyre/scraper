var hapi = require("hapi");
var request = require("request");
var through = require("through2");

var server = new hapi.Server();
server.connection({port:8000});
server.start();

server.views({
  engines:{
    html:require('handlebars')
  },
  path: "./views/templates",
  layoutPath: "./views",
  layout: "default",
  isCached: false
});

server.route(require("./server/routes.js"));

server.route({
   method: "GET",
   path: "/proxy/{url}",
   handler: function(req, reply) {
      var url = "http://" + req.params.url;
      var stream = through();
      request(url).pipe(stream);
      reply(stream);
   }
});
