const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Creation du model D'un User
 */

let UserSchema = new Schema({
     Username :{
            type: String,
            required: true,
            unique: trusted
     },
     email:{
            type: String,
            required : true,
            unique : true
     },
     password: {
            type :String,
            required : true
     },
     avatar : String,
     CreationUser : {
            type: Date,
            default: Date.now()
      }
})

//exportation du module
module.exports = mongoose.model('User', UserSchema);