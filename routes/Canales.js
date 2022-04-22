const { Router } = require('express');
const { canalesGet, canalesPost, canalesPut, canalesDelete } = require('../controllers/canales');
const router = Router();

router.get('/', canalesGet);

router.post('/', canalesPost);

router.put('/', canalesPut);

router.delete('/', canalesDelete);





module.exports = router