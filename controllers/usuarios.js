const { response } = require("express");
const { Usuario } = require('../models');
const bcryptjs = require('bcryptjs');


const usuariosGet = async(req, res = response) => {
    const usuarios = await Usuario.find();

    res.json({
        usuarios
    });

}

const usuariosPost = async(req, res = response) => {
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });
    // encriptar pass
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);
    //guardar en db
    await usuario.save();

    res.json(usuario);
}

const usuariosPut = async(req, res = response) => {

    const id = req.params.id;
    const { _id, password, ...resto } = req.body;
    //Validar contra base de datos
    if (password) {
        // encriptar pass
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        usuario
    });
}

const usuariosDelete = async(req, res = response) => {
    const { id } = req.params;
    //fisicamente borrarlo 
    const usuario = await Usuario.findByIdAndDelete(id);
    res.json({
        msg: 'usuario borrado'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}