"use strict"

function db_connect(){
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";
// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(!err) {
    console.log("We are connected");
    // The database object
mydb = db.db("mydb");
// StudentsDays collection
studentsDays = db.collection("studentDays");
return studentsDays;
  }
});
}


function get_student_db(student_name = null){
    let studentsDays = db_connect();
    let student = studentsDays.find({name: student_name})
    return student
}