const { Router } = require('express');
const { canalesGet, canalesPost, canalesPut, canalesDelete } = require('../controllers/canales');
const { check } = require('express-validator');
const { existeDistribuidorporID, existeCanalPorID } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

router.get('/', canalesGet);

router.post('/', [
    validarJWT,
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('codigo', 'el codigo es obligatorio').not().isEmpty(),
    check('distribuidor', 'El distribuidor es obligatorio').not().notEmpty(),
    check('distribuidor', 'no es un id de mongo').isMongoId(),
    check('distribuidor').custom(existeDistribuidorporID),
    validarCampos
], canalesPost);

router.put('/:id', [
    validarJWT,
    check('id').custom(existeCanalPorID),
    validarCampos
], canalesPut);

router.delete('/:id', [
    validarJWT,
    check('id', 'no es un ID valido').isMongoId(),
    check('id').custom(existeCanalPorID),
    validarCampos
], canalesDelete);





module.exports = router