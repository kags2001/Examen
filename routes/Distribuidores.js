const { Router } = require('express');
const { distribuidoresGet, distribuidoresPost, distribuidoresPut, distribuidoresDelete } = require('../controllers/distribuidores');
const router = Router();

router.get('/', distribuidoresGet);

router.post('/', distribuidoresPost);

router.put('/:id', distribuidoresPut);

router.delete('/', distribuidoresDelete);





module.exports = router