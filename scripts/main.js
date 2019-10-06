"use strict"

initPage()

function showStudentClicked(student_name = undefined){
    student_name = document.getElementById("showStudentText").value;
    //console.log(student_name);
    if(student_name == ""){
       alert("הכנס שם עבורו יוצגו פרטים"); 
       return
    }
    let student = get_student_db(student_name)
    alert("name" + student)
    return
}

function initPage(){
    console.log("hello world!")
    // Buttons
    let showButton = document.getElementById("showStudent");
    let addDayButton = document.getElementById("addDay");
    let showAllButton = document.getElementById("showAllStudents");
    let aboveThreeDelaysButton = document.getElementById("aboveThreeDelays");
    let oneButton = document.getElementById("1");
    let twoButton = document.getElementById("2");
    let threeButton = document.getElementById("3");

    //Text Fields - input
    let showStudentTextField = document.getElementById("showStudentText");

}   
