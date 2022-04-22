const { response } = require("express");


const distribuidoresGet = (req, res = response) => {
    res.json({
        msg: 'todo ok1 - controlador'
    });
}

const distribuidoresPost = (req, res) => {
    const { nombre } = req.body;

    res.json({
        nombre
    });
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