var Backbone = require("backbone");
var sql = require("../../database");

var Task = Backbone.Model.extend({
	defaults:{
		user: "admin",
		url: "facebook.com",
		cookie: null,
		selector: null
	},
	create: function(callback){
		callback = callback || function() {};
		var data = this.toJSON();
		var query = "INSERT INTO tasks (user, url, selector, cookie) VALUES ($user, $url, $selector, $cookie);";

		sql.connection.run(query, {
			$user: data.user,
			$url: data.url,
			$selector: data.selector,
			$cookie: data.cookie
		}, callback);
	}
});

var task = new Task();

module.exports = Task;