
var massive = require('massive');

// var dbConnection = "postgres://owhmkznh:hxxkeFT6WkOZZ5-8qrA1aTWn2uOBbDGT@stampy.db.elephantsql.com:5432/owhmkznh";  // connection for free account at postgre
var dbConnection = "postgres://oxfmgejzvudchb:e63f8d8c81df7baea7bacf2b6e3f31bc3e5b89391e4980568e57034b77543813@ec2-54-243-185-123.compute-1.amazonaws.com:5432/ddq2tdbgj1t5g0?ssl=true"; // heroku


var db = massive.connect({connectionString : dbConnection},
  function(err, localdb){
     console.log("dbconn err: ", err);
      //console.log("db contents: ", localdb);

     db = localdb;
      //app.set('db', db);
  }
);

module.exports = {
    GetCampuses: function(req,res,next){
        db.get_campuses(function(err, prod) {
            console.log(err);
            res.status(200).send(prod);
        })
    },
    AddCampus: function(req,res,next){
        db.add_campus(req.body.location_name, req.body.street_address, req.body.city, req.body.state, req.body.country, req.body.post_code, function (err, prod) {
            console.log(err);
            res.status(200).send(prod);
        })
    },
    EditCampus: function(req,res,next){
        db.edit_campus(req.body.id, req.body.location_name, req.body.street_address, req.body.city, req.body.state, req.body.country, req.body.post_code, function(err, prod) {
            console.log(err);
            res.status(200).send(prod);
        })
    },
    DeleteCampus: function(req,res,next) {
        db.delete_campus(req.body.id, function(err, prod) {
            console.log(err);
            res.status(200).send(prod);
        })
    },
    GetCohorts: function(req,res,next){
        db.get_cohorts(function(err, prod) {
            console.log(err);
            res.status(200).send(prod);
        })
    },
    AddCohort: function(req,res,next){
        db.add_cohort(req.body.campus_id, req.body.name, req.body.start_date, req.body.end_date, function (err, prod) {
            console.log(err);
            res.status(200).send(prod);
        })
    },
    EditCohort: function(req,res,next){
        db.edit_cohort(req.body.id, req.body.campus_id, req.body.name, req.body.start_date, req.body.end_date, function(err, prod) {
            console.log(err);
            res.status(200).send(prod);
        })
    },
    DeleteCohort: function(req,res,next) {
        db.delete_cohort(req.params.id, function(err, prod) {
            console.log("delete cohort", req.params, err);
            res.status(200).send(prod);
        })
    },
    GetUsers: function(req,res,next){
        db.get_users(function(err, prod) {
            console.log(err);
            res.status(200).send(prod);
        })
    },
    AddUser: function(req,res,next){
        db.add_user(req.body.campus_id, req.body.first_name, req.body.last_name, req.body.email, function (err, prod) {
          db.get_users( function(err, prod) {    // need to return the new users list to the view
            console.log(err, " ::: ", prod);
            res.status(200).send(prod);
          })
        })
    },
    EditUser: function(req,res,next){
        db.edit_user(req.body.id, req.body.campus_id, req.body.first_name, req.body.last_name, req.body.email, function(err, prod) {
          db.get_users( function(err, prod) {    // need to return the new users list to the view
            console.log("edit", prod);
            res.status(200).send(prod);
          })
        })
    },
    DeleteUser: function(req,res,next) {
      console.log("DELETE USER REQ", req.params.id);
        db.delete_user(req.params.id, function(err, prod) {
            res.send(req.params.id);
        })
    },
    GetBuildings: function(req,res,next){
        db.get_buildings(function(err, prod) {
            console.log(prod);
            res.status(200).send(prod);
        })
    },
    AddBuilding: function(req,res,next){
        db.add_building(req.body.campus_id, req.body.street_address, req.body.city, req.body.state, req.body.country, req.body.post_code, function (err, prod) {
            res.status(200).send(prod);
        })
    },
    EditBuilding: function(req,res,next){
        db.edit_building(req.body.id, req.body.campus_id, req.body.street_address, req.body.city, req.body.state, req.body.country, req.body.post_code, function(err, prod) {
            console.log("changing locations");
            res.status(200).send(prod);
        })
    },
    DeleteBuilding: function(req,res,next) {
        db.delete_building(req.body.id, function(err, prod) {
            res.status(200).send(prod);
        })
    },
    GetApartments: function(req,res,next){
        db.get_apartments(function(err, prod) {
            //console.log("get admins: ", err, prod);
            res.status(200).send(prod);
        })
    },
    AddApartment: function(req,res,next){
        db.add_apartment(req.body.building_id, req.body.apartment_number, req.body.preferred_gender, req.body.over_21, function (err, prod) {
            console.log(err,":e:::p:", prod);
            res.status(200).send(prod);
        })
    },
    EditApartment: function(req,res,next){
        db.edit_apartment(req.body.id, req.body.building_id, req.body.apartment_number, req.body.preferred_gender, req.body.over_21, function(err, prod) {
            //console.log("changing locations");
            res.status(200).send(prod);
        })
    },

    DeleteApartment: function(req,res,next) {
        db.delete_room (req.body.id, function(err, prod) {
            db.delete_apartment(req.body.id, function(err, prod) {
                res.status(200).send(prod);
            })
        })
    },
    GetRooms: function(req,res,next){
        db.get_rooms(function(err, prod) {
            res.status(200).send(prod);
        })
    },
    GetRoomsByApartment: function(req,res, next) {
        console.log(req.params.id)
        db.get_apartment_rooms(req.params.id, function(err, prod) {
            console.log("get rooms:", req.params, err, prod)
            res.status(200).send(prod);
        })
    },
    AddRoom: function(req,res,next){
        db.add_room(req.body.apartment_id, req.body.number_of_beds, function (err, prod) {
            res.status(200).send(prod);
        })
    },
    EditRoom: function(req,res,next){
        db.edit_room(req.body.id, req.body.apartment_id, req.body.number_of_beds, req.body.beds_occupied, function(err, prod) {
            res.status(200).send(prod);
        })
    },
    DeleteRoom: function(req,res,next) {
        db.delete_room(req.body.id, function(err, prod) {
            res.status(200).send(prod);
        })
    },
    GetStudents: function(req,res,next){
        db.get_students(function(err, prod) {
            // console.log(prod);
            res.status(200).send(prod);
        })
    },
    AddStudent: function(req,res,next){
        db.add_student(req.body.cohort_id, req.body.room_id, req.body.first_name, req.body.last_name,
                        req.body.street_address, req.body.city, req.body.state, req.body.country,
                        req.body.post_code, req.body.phone, req.body.email, req.body.slack, req.body.dob,
                        req.body.gender, req.body.car_info, req.body.arrive_date, req.body.leave_date,
                        req.body.housing_eligibility, req.body.deposit_paid, req.body.accomodations,
                        req.body.notes, function (err, prod) {

            console.log(err, prod);
            res.status(200).send(prod);
        })
    },
    EditStudent: function(req,res,next){
      console.log("address" ,req.body.street_address)
        db.edit_student(req.body.id, req.body.cohort_id, req.body.room_id, req.body.first_name, req.body.last_name,
                        req.body.street_address, req.body.city, req.body.state, req.body.country,
                        req.body.post_code, req.body.phone, req.body.email, req.body.slack, req.body.dob,
                        req.body.gender, req.body.car_info, req.body.arrive_date, req.body.leave_date,
                        req.body.housing_eligibility, req.body.deposit_paid, req.body.accomodations,
                        req.body.notes,  function(err, prod) {
            db.get_students(function(err, prod) {
                res.status(200).send(prod);
            })
        })
    },
    DeleteStudent: function(req,res,next) {
        db.delete_student(req.body.id, function(err, prod) {
            res.status(200).send(prod);
        })
    },
    GetStudentsInCohort: function(req,res,next) {
        db.get_students_in_cohort(function(err, prod) {
            res.status(200).send(prod);
        })
    },
    StudentRoomAssign: function(req,res,next) {
        db.count_beds(req.body.room_id, 1, function(err, prod) {
            db.occupy_bed(req.body.student_id, req.body.room_id, function(err, prod) {
                db.get_students(function(err, prod) {
                    res.status(200).send(prod);
                })
            })
        })
    },
    StudentRoomVacate: function(req,res,next) {
        db.count_beds(req.body.room_id, -1, function(err, prod) {
             db.open_bed(req.body.student_id, function(err, prod) {
                db.get_students(function(err, prod) {
                    res.status(200).send(prod);
                })
            })
        })
    }
}
