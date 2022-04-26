const { Router } = require('express');
const { check } = require('express-validator');
const { distribuidoresGet, distribuidoresPost, distribuidoresPut, distribuidoresDelete } = require('../controllers/distribuidores');
const { validarCampos } = require('../middlewares/validar-campos');
const { existeCorreo, existeCorreoN, existeDistribuidorporID } = require('../helpers/db-validators');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

router.get('/', distribuidoresGet);

router.post('/', [
    validarJWT,
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('codigo', 'el codigo es obligatorio').not().isEmpty(),
    check('correoN').custom(existeCorreoN),
    check('correoA').custom(existeCorreo),
    validarCampos
], distribuidoresPost);

router.put('/:id', [
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeDistribuidorporID),

    validarCampos

], distribuidoresPut);

router.delete('/:id', [
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeDistribuidorporID),

    validarCampos

], distribuidoresDelete);





module.exports = router