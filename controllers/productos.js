const { response } = require("express");
const { Producto } = require('../models/index')



const productosGet = async(req, res = response) => {
    const productos = await Producto.find()

    res.json({
        productos
    })
}

const productoPost = async(req, res = response) => {


    const { nombre, distribuidor, Descripcion, monto } = req.body;
    const producto = new Producto();
    producto.nombre = nombre,
        producto.Descripcion = Descripcion,
        producto.monto = monto,
        producto.distribuidor = distribuidor



    //Guardar en Db
    await producto.save();
    res.json(producto);


}

const productosPut = async(req, res = response) => {
    const { id } = req.params;
    const todo = req.body;

    const productonuevo = await Producto.findByIdAndUpdate(id, todo)
    res.json(productonuevo)
}

const productosDelete = async(req, res = response) => {
    const { id } = req.params
    const borrarP = await Producto.findByIdAndRemove(id)
    res.json({
        msg: `se borro el producto`,
    })
}

module.exports = {
    productosGet,
    productoPost,
    productosPut,
    productosDelete
}