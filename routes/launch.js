//Once integrated with server
var models = require('../models.js');

exports.view = function(req, res){
	console.log(models.Art.find());
	var title = req.params.title;
	console.log("Opening Home Page.");
	models.Art.find({"title" : title})
	.exec(afterQueryRender)

	function afterQueryRender(err, results) {
		if(err) console.log(err);
		var art = results[0];
		console.log(art);
		res.render("launch", art);
	}
}