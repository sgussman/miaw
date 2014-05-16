var Mongoose = require('mongoose');


var ArtSchema = new Mongoose.Schema({
	"title": String,
	"artist": [String],
	"bio": [String],
	"about_art": [String],
	"photos": [String],
	"artist_pic": [String],
	"art_pic": String,
	"twitter_handle": String,
	"website": String
});

exports.Art = Mongoose.model('Art', ArtSchema);

