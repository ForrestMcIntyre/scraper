var hapi = require("hapi");
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
