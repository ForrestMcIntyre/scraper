var request = require("request");
var cheerio = require("cheerio");

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
    var result = $(selector);
    console.log(result);
    callback(null, result);
  };

  request(requestConfig, processRequest);
}
