const { Distribuidor, Usuario, Role, Producto, Canal } = require("../models");

const existeCorreoN = async(correoN = '') => {
    const existeCorreoN = await Distribuidor.findOne({ correoN });
    if (existeCorreoN) {
        throw new Error(`el correo N ya existe`);
    }

}

const existeCorreo = async(correoA = '') => {
    const existeCorreo = await Distribuidor.findOne({ correoA });
    if (existeCorreo) {
        throw new Error(`el correo  A ya existe`);
    }

}

const existeDistribuidorporID = async(id) => {
    const existeD = await Distribuidor.findById(id)
    if (!existeD) {
        throw new Error(`el id ${id} no existe`);
    }
}

const emailExiste = async(correo = '') => {
    const existeCorreoU = await Usuario.findOne({ correo });
    if (existeCorreoU) {
        throw new Error(`el correo ya existe`);
    }

}
const esRoleValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no esta registrado en la base de datos`)
    }
}

const existeUsuarioID = async(id) => {
    const existeU = await Usuario.findById(id)
    if (!existeU) {
        throw new Error(`el id ${id} no existe`);
    }
}

const existeProductoPorID = async(id) => {
    const existeP = await Producto.findById(id)
    if (!existeP) {
        throw new Error(`el producto con el id ${id} no existe`)
    }
}
const existeCanalPorID = async(id) => {
    const existeC = await Canal.findById(id)
    if (!existeC) {
        throw new Error(`el canal con el id ${id} no existe`)
    }
}

module.exports = {
    existeCorreo,
    existeCorreoN,
    existeDistribuidorporID,
    emailExiste,
    esRoleValido,
    existeUsuarioID,
    existeProductoPorID,
    existeCanalPorID
}