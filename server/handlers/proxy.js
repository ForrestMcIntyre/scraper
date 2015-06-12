var request = require("../browser");
var through = require("through2");

module.exports = function(req, reply) {
  var url = "http://" + req.params.url;
  var stream = through();

  request(url).pipe(stream);
  reply(stream);
};
