var models = require('../models.js');

exports.view = function(req, res){
	var title = req.params.title;
	console.log('Opening Twitter Page.');
	models.Art.find({"title" : title})
	.exec(afterQueryRender)

	function afterQueryRender(err, results) {
		if(err) console.log(err);
		var art = results[0];
		console.log(art);
		res.render("twitter", art);
	}
}