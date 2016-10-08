#!/usr/bin/env nodemon
var express = require('express')
      ,http = require('http')
      ,path = require('path')
      ,app = express()
      ,fs = require('fs')

var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
// var multer = require('multer');

var models = require("./models");


app.set('port', process.env.PORT || 3000);		
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true, saveUninitialized: true, secret: 'dfsadfs089u2' }));
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
// app.use(multer()); // parse multipart/form-data
app.use(express.static(path.join(__dirname, 'public')));

// dynamically include routes (Controller)
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route.controller(app);
  }
});


app.get('/', (req, res) =>{
	// {include:[ models.Task]}
  models.User.findAll().then((users) =>{
    res.render('index', {
      title: 'Sequelize: Express Example',
      users: users
    });
  });
});


// http.createServer(app).listen(app.get('port'), function(){
//   console.log('Express server listening on port ' + app.get('port'));
//   console.log('http://localhost:' + app.get('port'));
// });

models.sequelize.sync().then( () => {
  var server = app.listen(app.get('port'), () => {
    // debug('Express server listening on port ' + server.address().port);
    console.log('Express server listening on port ' + app.get('port'));
  	console.log('http://localhost:' + app.get('port'));
  });
});
