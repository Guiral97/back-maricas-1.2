let router = require('express').Router();
let {create, read, update  } = require('../controllers/itinerary');


router.get('/', read);
router.post('/', create);
router.put('/:id', update);


module.exports = router;
