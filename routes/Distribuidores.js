const { Router } = require('express');
const { check } = require('express-validator');
const { distribuidoresGet, distribuidoresPost, distribuidoresPut, distribuidoresDelete } = require('../controllers/distribuidores');
const router = Router();

router.get('/', [
    check('correoA', 'El correo no es valido').isEmail(),
], distribuidoresGet);

router.post('/', distribuidoresPost);

router.put('/:id', distribuidoresPut);

router.delete('/', distribuidoresDelete);





module.exports = router