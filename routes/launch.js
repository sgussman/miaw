//Once integrated with server
//var models = require('../models');

exports.view = function(req, res){
	console.log("Opening Home Page.");
	res.render("launch");
}