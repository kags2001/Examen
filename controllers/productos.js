const { response } = require("express");



const productosGet = (req, res = response) => {
    res.json({
        msg: 'produ1 - con'
    });
}

const productoPost = (req, res = response) => {
    res.json({
        msg: 'produ2- con'
    });
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