const { Router } = require('express');
const { check } = require('express-validator');
const { distribuidoresGet, distribuidoresPost, distribuidoresPut, distribuidoresDelete } = require('../controllers/distribuidores');
const { validarCampos } = require('../middlewares/validar-campos');
const { existeCorreo, existeCorreoN, existeDistribuidorporID } = require('../helpers/db-validators');
const router = Router();

router.get('/', distribuidoresGet);

router.post('/', [
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('codigo', 'el codigo es obligatorio').not().isEmpty(),
    check('correoA', 'el correo no es valido').isEmail(),
    check('correoN').custom(existeCorreoN),
    check('correoA').custom(existeCorreo),
    validarCampos
], distribuidoresPost);

router.put('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeDistribuidorporID),

    validarCampos

], distribuidoresPut);

router.delete('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeDistribuidorporID),

    validarCampos

], distribuidoresDelete);





module.exports = router