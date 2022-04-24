const distribuidor = require("../models/distribuidor");

const existeCorreoN = async(correoN = '') => {
    const existeCorreoN = await distribuidor.findOne({ correoN });
    if (existeCorreoN) {
        throw new Error(`el correo N ya existe`);
    }

}

const existeCorreo = async(correoA = '') => {
    const existeCorreo = await distribuidor.findOne({ correoA });
    if (existeCorreo) {
        throw new Error(`el correo  A ya existe`);
    }

}

const existeDistribuidorporID = async(id) => {
    const existeD = await distribuidor.findById(id)
    if (!existeD) {
        throw new Error(`el id ${id} no existe`);
    }
}


module.exports = {
    existeCorreo,
    existeCorreoN,
    existeDistribuidorporID
}