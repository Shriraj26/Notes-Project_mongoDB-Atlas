const mongoose = require("mongoose");
const uri =
  "mongodb+srv://NotesUser:Notes123@cluster0.9ogkm.mongodb.net/Notes_App_development_db?retryWrites=true&w=majority";
//const uri = 'mongodb://localhost:27017/myapp';

//MONGODB_URI is = mongodb+srv://NotesUser:Notes123@cluster0.9ogkm.mongodb.net/Notes_App_development_db?retryWrites=true&w=majority

mongoose.connect(uri, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to the DB"));

db.once("open", function () {
  console.log("Connected to the DB: MongoDB");
});

module.exports = db;
