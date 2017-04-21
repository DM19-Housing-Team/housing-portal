var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config');
var path = require("path");
var controller = require('./controllers/dbCtrl');

var app = express();
var port = 3006;

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
app.delete('/api/campus/:id', controller.DeleteCampus);

// accessing user CRUD functions
app.get('/api/users', controller.GetUsers);
app.put('/api/users', controller.EditUser);
app.post('/api/users', controller.AddUser);
app.delete('/api/users/:id', controller.DeleteUser);

// accessing cohort CRUD functions
app.get('/api/cohort', controller.GetCohorts);
app.put('/api/cohort', controller.EditCohort);
app.post('/api/cohort', controller.AddCohort);
app.delete('/api/cohort/:id', controller.DeleteCohort);

// accessing cohort CRUD functions
app.get('/api/building', controller.GetBuildings);
app.put('/api/building', controller.EditBuilding);
app.post('/api/building', controller.AddBuilding);
app.delete('/api/building/:id', controller.DeleteBuilding);

// accessing apartment CRUD functions
app.get('/api/apartment', controller.GetApartments);
app.put('/api/apartment', controller.EditApartment);
app.post('/api/apartment', controller.AddApartment);
app.delete('/api/apartment/:id', controller.DeleteApartment);

// accessing room CRUD functions
app.get('/api/room', controller.GetRooms);
app.put('/api/room', controller.EditRoom);
app.post('/api/room', controller.AddRoom);
app.delete('/api/room/:id', controller.DeleteRoom);


// accessing student CRUD functions
app.get('/api/student', controller.GetStudents);
app.put('/api/student', controller.EditStudent);
app.post('/api/student', controller.AddStudent);
app.delete('/api/student/:id', controller.DeleteStudent);


// get student and cohort information
app.get('/api/cohort/student', controller.GetStudentsInCohort);

// get rooms from a specific apartment
app.get('/api/apartment/:id', controller.GetRoomsByApartment);

// endpoints for assigning a student to a room
app.put('/api/room/student', controller.StudentRoomAssign);
app.put('/api/room/clear', controller.StudentRoomVacate);



app.get('/admin', function (request, response){
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(port, function() {
    console.log('Listening on port ', port);
});

module.exports = app;
