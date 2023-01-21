let VehiculeModel = require('../models/VehiculeModel');

module.exports = {
      list: (req, res)=>{
            VehiculeModel.find((err, vehicules)=>{
                  if(err){
                        return res.status(500).json({
                              status : 500,
                              message :'Error when getting Vehicule .'
                        })
                  }return res.status(200).json({
                        status : 200,
                        vehicules : vehicules
                  })
            })
      },
      show: (req, res)=>{
            const id = req.params.id
            VehiculeModel.findOne({_id: id}, (err, vehicule)=>{
                  if(err){
                        return res.status(500).json({
                              status : 500,
                              message :'Error when getting Vehicule .'
                        })
                  }
                  if(!vehicule){
                        return res.status(404).json({
                              status : 404,
                              message :'Vehicule Not found'
                        })
                  }
                  return res.status(200).json({
                        status: 200,
                        vehicule: vehicule
                  })
            })
      },
      create: (res, req) =>{
            let Vehicule = new VehiculeModel({
                  ...req.body   
            })
            Vehicule.save((err, Vehicule)=>{
                  if(err){
                        return res.status(500).json({
                              message:'Error when getting Vehicule',
                              error: err
                        });
                  }
                  return res.status(201).json({
                        status : 201,
                        message : 'Vehicul created'
                  })
            })
      }
}