const { Router } = require('express');
const { productosGet, productoPost, productosPut, productosDelete } = require('../controllers/productos');
const router = Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { existeDistribuidorporID, existeProductoPorID } = require('../helpers/db-validators');


router.get('/', productosGet);

router.post('/', [
    validarJWT,
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('Descripcion', 'la Descripcion es obligatoria').not().isEmpty(),
    check('monto', 'el monto es obligatorio').not().isEmpty(),
    check('monto', 'el monto debe ser un numero').isNumeric(),
    check('distribuidor', 'El distribuidor es obligatorio').not().notEmpty(),
    check('distribuidor', 'no es un id de mongo').isMongoId(),
    check('distribuidor').custom(existeDistribuidorporID),
    validarCampos
], productoPost);

router.put('/:id', [
    validarJWT,
    check('id').custom(existeProductoPorID),
    validarCampos
], productosPut);

router.delete('/:id', [
    validarJWT,
    check('id', 'no es un ID valido').isMongoId(),
    check('id').custom(existeProductoPorID),
    validarCampos
], productosDelete);





module.exports = router