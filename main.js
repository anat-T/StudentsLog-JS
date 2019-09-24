"use strict"

let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";
// The database object
let mydb = db.db("mydb");
// StudentsDays collection
let studentsDays = db.collection("studentDays");

function showStudentClicked(student_name = null){
    student_name = document.getElementById("showStudentText").value;
    //console.log(student_name);
    if(student_name == null){
       alert("הכנס שם עבורו יוצגו פרטים"); 
       return
    }
    let student = get_student_db(student_name)
    alert("name" + student)
    return
}

function main(){
    // Buttons
    let showButton = document.getElementsById("showStudent");
    let addDayButton = document.getElementsById("addDay");
    let showAllButton = document.getElementsById("showAllStudents");
    let aboveThreeDelaysButton = document.getElementsById("aboveThreeDelays");
    let oneButton = document.getElementsById("1");
    let twoButton = document.getElementsById("2");
    let threeButton = document.getElementsById("3");

    //Text Fields - input
    let showStudentTextField = document.getElementsById("showStudentText");

}   
