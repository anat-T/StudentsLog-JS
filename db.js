"use strict"

//The database object
let mydb = db.db("mydb");
// StudentsDays collection
let studentsDays = mydb.collection("studentDays");

function get_student_db(student_name = null){
    let student = studentsDays.find({name: student_name})
    return student
}