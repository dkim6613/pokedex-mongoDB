const router = require('express').Router();
const controller = require('./controller.js');


router.route('/pokedex').get(controller.get).post(controller.create)


module.exports = router;