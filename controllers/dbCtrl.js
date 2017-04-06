
var massive = require('massive');
var dbConnection = "postgres://owhmkznh:hxxkeFT6WkOZZ5-8qrA1aTWn2uOBbDGT@stampy.db.elephantsql.com:5432/owhmkznh";


var db = massive.connect({connectionString : dbConnection},
  function(err, localdb){
     db = localdb;
      //app.set('db', db);
  }
);

module.exports = {
    GetCampuses: function(req,res,next){
        db.get_campuses(function(err, prod) {
            console.log("get campi: ", err, prod);
            res.status(200).json(prod);
        })
    },
    AddCampus: function(req,res,next){
        db.add_campus(req.body.location_name, req.body.street_address, req.body.city, req.body.state, req.body.country, req.body.post_code, function (err, prod) {
            console.log(err, prod); 
            res.status(200).send("errors: " + err + " %%%% prods: " + prod);
        })
    },
    EditCampus: function(req,res,next){
        db.edit_campus(req.body.id, req.body.location_name, req.body.street_address, req.body.city, req.body.state, req.body.country, req.body.post_code, function(err, prod) {
            console.log("changing locations");
            res.status(200).send(prod);
        })
    },
    DeleteCampus: function(req,res,next) {
        db.delete_campus(req.body.id, function(err, prod) {
            res.status(200).send(err + ':::' + prod);
        })
    },
    GetCohorts: function(req,res,next){
        db.get_cohorts(function(err, prod) {
            console.log("get admins: ", err, prod);
            res.status(200).send(prod);
        })
    },
    AddCohort: function(req,res,next){
        db.add_cohort(req.body.campus_id, req.body.name, req.body.start_date, req.body.end_date, function (err, prod) {
            console.log(err, prod); 
            res.status(200).send("errors: " + err + " %%%% prods: " + prod);
        })
    },
    EditCohort: function(req,res,next){
        db.edit_cohort(req.body.id, req.body.campus_id, req.body.name, req.body.start_date, req.body.end_date, function(err, prod) {
            console.log("changing locations");
            res.status(200).send(err + prod);
        })
    },
    DeleteCohort: function(req,res,next) {
        db.delete_cohort(req.body.id, function(err, prod) {
            res.status(200).send(err + prod);
        })
    },
    GetUsers: function(req,res,next){
        db.get_users(function(err, prod) {
            console.log("get admins: ", err, prod);
            res.status(200).send(prod);
        })
    },
    AddUser: function(req,res,next){
        db.add_user(req.body.campus_id, req.body.first_name, req.body.last_name, req.body.email, function (err, prod) {
            console.log(err, prod); 
            res.status(200).send("errors: " + err + " %%%% prods: " + prod);
        })
    },
    EditUser: function(req,res,next){
        db.update_campus(req.body.id, req.body.campus_id, req.body.first_name, req.body.last_name, req.body.email, function(err, prod) {
            console.log("changing locations");
            res.status(200).send(prod);
        })
    },
    DeleteUser: function(req,res,next) {
        db.delete_campus(req.body.id, function(err, prod) {
            res.status(200).send(prod);
        })
    },

    /*
    GetBuildings: function(req,res,next){
        db.get_buildings(function(err, prod) {
            console.log(prod);
            res.status(200).send(prod);
        })
    },
    AddBuilding: function(req,res,next){
        db.add_building(function (err, prod) {
            console.log(err, prod); 
            res.status(200).send("errors: " + err + " %%%% prods: " + prod);
        })
    },
    EditBuilding: function(req,res,next){
        db.edit_building(req.body.id, req.body.location_name, function(err, prod) {
            console.log("changing locations");
            res.status(200).send(prod);
        })
    },
    DeleteBuilding: function(req,res,next) {
        db.delete_building(req.body.id, function(err, prod) {
            res.status(200).send(prod);
        })
    }*/
}
