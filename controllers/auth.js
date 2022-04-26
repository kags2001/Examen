const { response } = require("express");
const { Usuario } = require('../models')
const bcryptjs = require("bcryptjs");
const { generarJWT } = require("../helpers/generar-Jwt");




const login = async(req, res = response) => {
    const { correo, password } = req.body;

    try {
        //verificar si el email existe
        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(400).json({
                msg: 'usuario/ password no son correctos - correo'
            });
        }

        //verificar el password
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'usuario/ password no son correctos - password'
            });
        }

        const token = await generarJWT(usuario.id);
        res.json({
            usuario,
            token
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'hable con el administrador'
        })
    }

}


module.exports = {
    login
}