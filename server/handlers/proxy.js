var request = require("request");
var through = require("through2");

module.exports = function(req, reply) {
  var url = "http://" + req.params.url;
  var stream = through();
  var chromeRequest = request.defaults({
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.81 Safari/537.36"
    }
  });
  chromeRequest(url).pipe(stream);
  reply(stream);
};
