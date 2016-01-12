var Backbone = require("backbone");
var sql = require("../../database");
var Task = require("./task");

var TaskList = Backbone.Collection.extend({
	model: Task,
	load: function(callback) {
		var self = this;
		var query = "SELECT * FROM tasks;";
		sql.connection.all(query, function(err, results){
			self.reset(results);
			callback();
		});
	}
});

module.exports = TaskList;