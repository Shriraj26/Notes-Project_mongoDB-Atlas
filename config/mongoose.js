const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

//MONGODB_URI is = mongodb+srv://NotesUser:Notes123@cluster0.9ogkm.mongodb.net/Notes_App_development_db?retryWrites=true&w=majority

mongoose.connect(uri, {useNewUrlParser:true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the DB'));

db.once('open', function(){
	console.log('Connected to the DB: MongoDB');
});

module.exports = db;

