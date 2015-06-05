var Scraper = require("./scraper");
var ScraperView = require("./scraperView");

var scraper = new Scraper();
var view = new ScraperView({model:scraper});
view.render();
