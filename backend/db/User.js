const mongoose=require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({

name:String,
email:String,
password:String
    
    
  
});
module.exports =  mongoose.model('users', userSchema)
//module.exports =  mongoose.model('User', UserSchema)