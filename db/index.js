var mongoose = require('mongoose');
var data = require('./fakeData.js');

mongoose.connect('mongodb://yon:yon123@ds149252.mlab.com:49252/fec-nearby');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoosy~~');
});

var nearbySchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: String,
  location: String,
  expense: Number,
  zagat: {},
  typeOfFood: String,
  rating: Number,
  description: String,
  picture: Array
});

var nearby = mongoose.model('nearby', nearbySchema);

nearby.insertMany(data);

module.exports = nearby;
