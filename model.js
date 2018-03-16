var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mobileShop');

var personSchema = mongoose.Schema({
    name: String,
    email: String,
    contact: Number,
    message: String,
 });
 var Person = mongoose.model("Person", personSchema);
 module.exports = Person;
 