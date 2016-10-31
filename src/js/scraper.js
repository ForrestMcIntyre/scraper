var Backbone = require("backbone");

var Scraper = Backbone.Model.extend({
   defaults:{
      url: "reddit.com",
      cookie: null,
      submitted: false
   },
   setOptions: function(){
      var url = $("#url");
      var cookie = $("#cookie");
      this.set("url", url);
      this.set("cookie", cookie);
      this.set("submitted", true);
   }
});

module.exports = Scraper;
