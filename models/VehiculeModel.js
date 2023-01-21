const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Creation du model D'un vehicule
 */
let VehiculeSchema = new Schema({
      image:String,
      model: {
            type :String,
            required : true
      },
      descripion:String,
      anne:{
            type: Number,
            required: true
      },
      typeVehicule:{
            type: String,
            required: true
      },
      UserId: {
            type : Schema.Types.ObjectId,
            ref: 'User'
      },
      depot : {
            type: Date,
            default: Date.now()
      }
});

//exportation du module
module.exports = mongoose.model('Vehicule', VehiculeSchema);