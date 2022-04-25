const { response } = require("express");
const { Producto } = require('../models/index')



const productosGet = async(req, res = response) => {}

const productoPost = async(req, res = response) => {
    const { codigo } = req.body;

    const productoDB = await Producto.findOne({ codigo })
    if (productoDB) {
        return res.status(400).json({
            msg: 'el producto ya existe'
        });
    }
    const data = {
        codigo,
        distribuidor: req.distribuidor.id
    }
    console.log(data)


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