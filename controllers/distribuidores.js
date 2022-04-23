const { response } = require("express");
const Distribuidor = require('../models/distribuidor');


const distribuidoresGet = (req, res = response) => {
    res.json({
        msg: 'todo ok1 - controlador'
    });
}

const distribuidoresPost = async(req, res) => {
    const { nombre, codigo, correoN, correoA } = req.body;
    const distribuidor = new Distribuidor({ nombre, codigo, correoN, correoA });

    //Verificar si los correos existen
    const existecorreoA = await Distribuidor.findOne({ correoA });
    if (!existecorreoA) {
        await distribuidor.save();
    } else {
        return res.status(400).json({
            msg: "el correo ya existe"
        })
    }


    //Guardar en Db
    await distribuidor.save();

    res.json(distribuidor);
}

const distribuidoresPut = (req, res) => {
    const id = req.params.id;
    res.json({
        msg: 'todo ok3- controlador',
        id
    });
}

const distribuidoresDelete = (req, res) => {
    res.json({
        msg: 'todo ok4 - controlador'
    });
}


module.exports = {
    distribuidoresGet,
    distribuidoresPost,
    distribuidoresPut,
    distribuidoresDelete
}