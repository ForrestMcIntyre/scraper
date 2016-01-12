var sqlite = require("sqlite3");

var facade = {
	connection: null,
	init: function(callback) {
		var db = new sqlite.Database("tasks.db");
		facade.connection = db;
		db.run("CREATE TABLE IF NOT EXISTS tasks (user, url, selector, cookie)", function(){
			callback();
		});
	}
};

module.exports = facade;