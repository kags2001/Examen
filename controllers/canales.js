const { response } = require("express");
const { Canal } = require("../models");



const canalesGet = async(req, res = response) => {
    const canal = await Canal.find()
    res.json(canal)
}

const canalesPost = async(req, res = response) => {
    const { nombre, codigo, distribuidor } = req.body;
    const canal = new Canal();
    canal.nombre = nombre,
        canal.codigo = codigo,
        canal.distribuidor = distribuidor



    //Guardar en Db
    await canal.save();
    res.json(canal);
}

const canalesPut = async(req, res = response) => {
    const { id } = req.params;
    const todo = req.body;

    const canalnuevo = await Canal.findByIdAndUpdate(id, todo)
    res.json(canalnuevo)
}

const canalesDelete = async(req, res = response) => {
    const { id } = req.params
    const borrarC = await Canal.findByIdAndRemove(id)
    res.json({
        msg: `se borro el canal`,
    })
}


module.exports = {
    canalesGet,
    canalesPost,
    canalesPut,
    canalesDelete
}