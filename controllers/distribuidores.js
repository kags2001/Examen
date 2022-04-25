const { response } = require("express");
const Distribuidor = require('../models/distribuidor');


const distribuidoresGet = async(req, res = response) => {
    const distribuidores = await Distribuidor.find();

    res.json({
        distribuidores
    });
}

const distribuidoresPost = async(req, res) => {

    const { nombre, codigo, correoN, correoA } = req.body;
    const distribuidor = new Distribuidor({ nombre, codigo, correoN, correoA });

    //Guardar en Db
    await distribuidor.save();
    res.json(distribuidor);

}


const distribuidoresPut = async(req, res = response) => {
    const { id } = req.params;
    const todo = req.body;

    const distribuidor = await Distribuidor.findByIdAndUpdate(id, todo)
    res.json({
        distribuidor
    });
}

const distribuidoresDelete = async(req, res) => {
    const { id } = req.params
    const distribuidor = await Distribuidor.findByIdAndRemove(id)

    res.json({
        msg: `se elimino el distribuidor con el id ${id}`,
    });
}


module.exports = {
    distribuidoresGet,
    distribuidoresPost,
    distribuidoresPut,
    distribuidoresDelete
}