var scrape = require("../scrape");
var Task = require("../database/task")

module.exports = function(req, reply) {
   var url = "http://" + req.payload.url;
   console.log(url, req.payload);

   var task = new Task({
    user: "admin",
    url: url,
    cookie: req.payload.cookie,
    selector: req.payload.selector
   });
   task.create(function(err){
    if (err){
      console.error(err);
    }
   });
   return reply.view("scraper", {
    submitted: true
   });
   // scrape({
   //   url: url,
   //   cookie: req.payload.cookie,
   //   selector: req.payload.selector
   // }, function(err, result) {
   //    var cookie = (!req.payload.cookie) ? null : req.payload.cookie;
   //    console.log(cookie);
   //  return reply.view("result", {
   //    result: result,
   //    url: req.payload.url,
   //    selector: req.payload.selector,
   //    cookie: cookie
   //  });
   // })
};
