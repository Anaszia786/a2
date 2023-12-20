let mongoose = require('mongoose');


let userSchema = mongoose.Schema({
    email:String,
    password:String,
    ads:[]
});

module.exports = mongoose.model('user', userSchema)




let producdSchema = mongoose.Schema({
    email:String,
    password:String,
    ads:[]
});

module.exports = mongoose.model( 'product', producdSchema)
