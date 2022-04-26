const { response } = require("express");
const { Producto } = require('../models/index')



const productosGet = async(req, res = response) => {}

const productoPost = async(req, res = response) => {


    const data = {

    }

    const producto = new Producto({ data });

    //Guardar en Db
    await producto.save();
    res.json(producto);


}

const productosPut = (req, res = response) => {
    res.json({
        msg: 'produ3 - con'
    });
}

const productosDelete = (req, res = response) => {
    res.json({
        msg: 'produ4 - con'
    });
}

module.exports = {
    productosGet,
    productoPost,
    productosPut,
    productosDelete
}