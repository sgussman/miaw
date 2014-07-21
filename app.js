/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');		
var path = require('path');
var handlebars = require('express3-handlebars');
var mongoose = require('mongoose');

//Required Routing Files
var launch = require('./routes/launch');
var art = require('./routes/art');
var artist = require('./routes/artist');
var class_page = require('./routes/class_page');
var gallery = require('./routes/gallery');
var twitter = require('./routes/twitter');

//Mongo database requirement
var local_database_name = 'artDB';
var local_database_uri  = 'mongodb://localhost/' + local_database_name;
var database_uri = process.env.MONGOLAB_URI || local_database_uri;
mongoose.connect(database_uri);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);			//set port
app.set('views', path.join(__dirname, 'views'));	//set view directory path
app.engine('handlebars', handlebars());				//sets the template engine
app.set('view engine', 'handlebars');				//sets default template engine
app.use(express.favicon());							//sets favicon
app.use(express.logger('dev'));						//sets log format to dev
app.use(express.json());							//sets parse for application/json reqs
app.use(express.urlencoded());						//parses URL encoded reqs
app.use(express.methodOverride());					//allows use of "GET" and "PUT"
app.use(express.cookieParser('Sam'));				//sets secret cookie signiture
app.use(express.session());							//setup sessions
app.use(app.router);								//sets the router to route my pages
app.use(express.static(path.join(__dirname, 'public')));	//set up directory for static resources

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Routes
app.get('/:title', launch.view);
app.get('/:title/art', art.view);
app.get('/:title/artist', artist.view);
app.get('/:title/class', class_page.view);
app.get('/:title/gallery', gallery.view);
app.get('/:title/twitter', twitter.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});