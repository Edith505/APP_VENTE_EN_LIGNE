var express = require('express');
const { route } = require('.');
const VehiculeController = require('../controllers/VehiculeController');
var router = express.Router();

router.get('/', VehiculeController.list);

router.get('/:id', VehiculeController.show);

router.post('/', VehiculeController.create);
 
module.exports = router;
