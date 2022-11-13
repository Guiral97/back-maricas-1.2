let router = require('express').Router();
let {create, read, update, destroy  } = require('../controllers/itinerary');


router.get('/', read);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', destroy);


module.exports = router;
