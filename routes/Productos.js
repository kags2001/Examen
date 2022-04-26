const { Router } = require('express');
const { productosGet, productoPost, productosPut, productosDelete } = require('../controllers/productos');
const router = Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { existeDistribuidorporID } = require('../helpers/db-validators');


router.get('/', productosGet);

router.post('/', [
    validarJWT,
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('distribuidor', 'no es un id de mongo').isMongoId(),
    check('distribuidor').custom(existeDistribuidorporID),
    validarCampos
], productoPost);

router.put('/', productosPut);

router.delete('/', productosDelete);





module.exports = router