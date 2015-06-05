var Backbone = require("backbone");

var Scraper = Backbone.Model.extend({
   defaults:{
      url: "google.com",
      cookie: null
   },
   setOptions: function(){
      var url = $("#url");
      var cookie = $("#cookie");
      this.set("url", url);
      this.set("cookie", cookie);
   }
});

module.exports = Scraper;
