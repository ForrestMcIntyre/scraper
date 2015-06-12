var request = require("./browser");
var cheerio = require("cheerio");
var async = require("async");

module.exports = function(config, callback) {
  var requestConfig = {
    url:config.url,
    headers:{
      Cookie:config.cookie
    }
  };
  var processRequest = function(err, response, body){
    if (response.statusCode > 299){
      return callback("Bad Response:" + response.statusCode);
    }
    var $ = cheerio.load(body);
    var selector = config.selector;
    var rawResult = $(selector);

    var result = rawResult.map(function(){
      return $(this).text().trim();
    });
    console.log(result.toArray());
    callback(null, result.toArray());
  };

  request(requestConfig, processRequest);
}
