const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuarios');
const { validarCampos } = require('../middlewares/validar-campos')
const { esRoleValido, emailExiste, existeUsuarioID } = require('../helpers/db-validators');
const { validarJWT } = require('../middlewares/validar-jwt');
const { tieneRole } = require('../middlewares/validar-roles');
const router = Router();

router.get('/', usuariosGet);

router.post('/', [
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('password', 'el password tiene que ser al menos de 6 letras').isLength({ min: 6 }),
    check('correo').custom(emailExiste),
    check('rol').custom(esRoleValido),
    validarCampos
], usuariosPost);

router.put('/:id', [],
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioID),
    validarCampos,
    usuariosPut);

router.delete('/:id', [
    validarJWT,
    tieneRole('ADMIN_ROLE'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioID),
    validarCampos

], usuariosDelete);





module.exports = router