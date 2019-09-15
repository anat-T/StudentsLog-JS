let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  // The database object
  let mydb = db.db("mydb");
  let myobj = [
    {"name": "Karin", "_id": "1", "date": "4.7.19", "delays": "4"},
    {"name": "Karin", "_id": "1", "date": "5.7.19", "delays": "0"},
    {"name": "Oria", "_id": "2", "date": "4.7.19", "delays": "0"},
    {"name": "Danit", "_id": "3", "date": "4.7.19", "delays": "0"},
    {"name": "Yael", "_id": "4", "date": "4.7.19", "delays": "0"},
    {"name": "NoaB", "_id": "5", "date": "4.7.19", "delays": "0"},
    {"name": "NoaY", "_id": "6", "date": "4.7.19", "delays": "0"},
    {"name": "Ester", "_id": "7", "date": "4.7.19", "delays": "0"},
    {"name": "Denis", "_id": "8", "date": "4.7.19", "delays": "0"},
    {"name": "Yuval", "_id": "9", "date": "4.7.19", "delays": "0"},
    {"name": "Ziv", "_id": "10", "date": "4.7.19", "delays": "0"},
    {"name": "Avia", "_id": "11", "date": "4.7.19", "delays": "0"},
    {"name": "Alona", "_id": "12", "date": "4.7.19", "delays": "0"},
    {"name": "NoaM", "_id": "13", "date": "4.7.19", "delays": "0"},
    {"name": "Liel", "_id": "14", "date": "4.7.19", "delays": "0"},
    {"name": "Polina", "_id": "15", "date": "4.7.19", "delays": "0"},
    {"name": "Neta", "_id": "16", "date": "4.7.19", "delays": "0"},
    {"name": "Aviv", "_id": "17", "date": "4.7.19", "delays": "0"},
    {"name": "Erez", "_id": "18", "date": "4.7.19", "delays": "0"},
    {"name": "ArielA", "_id": "19", "date": "4.7.19", "delays": "0"},
    {"name": "Shilo", "_id": "20", "date": "4.7.19", "delays": "0"},
    {"name": "Marom", "_id": "21", "date": "4.7.19", "delays": "0"},
    {"name": "Shalev", "_id": "22", "date": "4.7.19", "delays": "0"},
    {"name": "Ari", "_id": "23", "date": "4.7.19", "delays": "0"},
    {"name": "Evyatar", "_id": "24", "date": "4.7.19", "delays": "0"},
    {"name": "Yehonatan", "_id": "25", "date": "4.7.19", "delays": "0"},
    {"name": "ArielP", "_id": "26", "date": "4.7.19", "delays": "0"},
    {"name": "Shir", "_id": "27", "date": "4.7.19", "delays": "0"},
    {"name": "Maor", "_id": "28", "date": "4.7.19", "delays": "0"},
    {"name": "AlmogM", "_id": "29", "date": "4.7.19", "delays": "0"},
    {"name": "Shaked", "_id": "30", "date": "4.7.19", "delays": "0"},
    {"name": "Daniel", "_id": "31", "date": "4.7.19", "delays": "0"},
    {"name": "AlmogR", "_id": "32", "date": "4.7.19", "delays": "0"},
    {"name": "Ron", "_id": "33", "date": "4.7.19", "delays": "0"},
    {"name": "Alon", "_id": "34", "date": "4.7.19", "delays": "0"},
    {"name": "Raz", "_id": "35", "date": "4.7.19", "delays": "0"},
    {"name": "Koren", "_id": "36", "date": "4.7.19", "delays": "0"},
    {"name": "Ori", "_id": "37", "date": "4.7.19", "delays": "0"}
  ];
    dbo.collection("studentsDays").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    print(res.insertedIds)
    db.close();
  });
});