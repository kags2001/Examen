const { Router } = require('express');
const { productosGet, productoPost, productosPut, productosDelete } = require('../controllers/productos');
const router = Router();

router.get('/', productosGet);

router.post('/', productoPost);

router.put('/', productosPut);

router.delete('/', productosDelete);





module.exports = router