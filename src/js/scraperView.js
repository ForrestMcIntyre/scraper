var Backbone = require("backbone");
var _ = require("underscore");
var $ = require("jquery");

var ScraperView = Backbone.View.extend({
   el: ".scraper",
   template: _.template($("#scraper-template").html()),
   initialize: function(){
      this.listenTo(this.model, "change", this.render);
   },
   events: {
      "click .update-url":"updateUrl"
   },
   updateUrl: function(e){
     e.preventDefault();
      var url = $("#url").val();
      this.model.set("url", url);
   },
   render: function(){
      var data = this.model.toJSON();
      this.$el.html(this.template(data));
   }
});

module.exports = ScraperView;
