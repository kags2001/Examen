const { Router } = require('express');
const { productosGet, productoPost, productosPut, productosDelete } = require('../controllers/productos');
const router = Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');


router.get('/', productosGet);

router.post('/', [
    check('codigo', 'el codigo es obligatorio').not().isEmpty(),
    check('codigo', 'el codigo debe ser un numero').isNumeric(),
    validarCampos
], productoPost);

router.put('/', productosPut);

router.delete('/', productosDelete);





module.exports = router