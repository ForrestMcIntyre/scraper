var scrape = require("../scrape");

module.exports = function(req, reply) {
   var url = "http://" + req.payload.url;
   console.log(url, req.payload);
   scrape({
     url: url,
     cookie: req.payload.cookie,
     selector: req.payload.selector
   }, function(err, result) {
      var cookie = (!req.payload.cookie) ? null : req.payload.cookie;
      console.log(cookie);
    return reply.view("result", {
      result: result,
      url: req.payload.url,
      selector: req.payload.selector,
      cookie: cookie
    });
   })
};
