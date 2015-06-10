var request = require("request");
var cheerio = require("cheerio");

module.exports = function(config, callback) {
  console.log("the config object is", config)
  // request({
  //   url: config.url,
  //   headers: {
  //     Cookie: config.cookie
  //   }
  // });
  // request.on("done", function() {
  //   callback(null, result);
  // })
  var requestConfig = {
    url:config.url,
    headers:{
      Cookie:config.cookie
    }
  };
  var processRequest = function(err, response, body){
    var $ = cheerio.load(body);
    callback(null, result);
  };

  request(requestConfig, processRequest);
}
