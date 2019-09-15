"use strict"
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";
// The database object
let mydb = db.db("mydb");
let studentsDays = db.collection("studentDays");


