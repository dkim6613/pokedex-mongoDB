const router = require('express').Router();
const controller = require('./controller.js');


router.route('/pokedex').get(controller.get)
router.route('/pokedex/:id').put(controller.put).delete(controller.delete)

router.route('/pokedex/pokemon').post(controller.postPokemon)
router.route('/pokedex/types').post(controller.postType)
router.route('/pokedex/images').post(controller.postImage)




module.exports = router;