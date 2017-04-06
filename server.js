var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config');
var path = require("path");
var controller = require('./controllers/dbCtrl');

var app = express();
var port = 3000;

app.use(express.static(__dirname + "/build"));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({"secret": config.sessionSecret}));

// many of these functions won't be used in the final product,
// some will be replaced by more comprehensive, encompassing queries

// accessing campus CRUD functions, will be rare to need something besides 'get'
app.get('/api/campus', controller.GetCampuses);
app.post('/api/campus', controller.AddCampus);
app.put('/api/campus', controller.EditCampus);
app.delete('/api/campus', controller.DeleteCampus);

// accessing user CRUD functions
app.get('/api/users', controller.GetUsers);
app.put('/api/users', controller.EditUser);
app.post('/api/users', controller.AddUser);
app.delete('/api/users', controller.DeleteUser);

// accessing cohort CRUD functions
app.get('/api/cohort', controller.GetCohorts);
app.put('/api/cohort', controller.EditCohort);
app.post('/api/cohort', controller.AddCohort);
app.delete('/api/cohort', controller.DeleteCohort);

// accessing apartment CRUD functions
app.get('/api/cohort', controller.GetApartments);
app.put('/api/cohort', controller.EditApartment);
app.post('/api/cohort', controller.AddApartment);
app.delete('/api/cohort', controller.DeleteApartment);





app.get('/admin', function (request, response){
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(port, function() {
    console.log('Listening on port ', port);
});

module.exports = app;
