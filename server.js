
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var main = require('./routes/main');
var main2 = require('./routes/main2');

var login = require('./routes/login');
var addUser = require('./routes/addUser');

var addActivity = require('./routes/addActivity');
var addData = require('./routes/addData');
var editData = require('./routes/editData');
var deleteActivity = require('./routes/deleteActivity');
var help = require('./routes/help')
var validation = require('./routes/validation');

var activity = require('./routes/activity');
var activity2 = require('./routes/activity2');
var motivate = require('./routes/motivate');

// Example route
// var user = require('./routes/user');
var data = require('./userData.json');

app = express();
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/login', login.view);
app.get('/motivate', motivate.view);
app.get('/validation', validation.validate);
app.get('/activity/:name', activity.view);
app.get('/activity2/:name', activity2.view);
app.get('/main/:name/:defaultCategory/:defaultActivity/:dataArray/:labelArray', main.view);
app.get('/main2/:name/:defaultCategory/:defaultActivity/:dataArray/:labelArray', main2.view);
app.get('/addUser', addUser.addUsers);
app.get('/addActivity', addActivity.addActivities);
app.get('/deleteActivity', deleteActivity.deleteActivities);
app.get("/addData",addData.addValue);
app.get("/help", help.view);
app.get("/editData",editData.editValue);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
