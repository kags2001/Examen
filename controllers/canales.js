const { response } = require("express");



const canalesGet = (req, res = response) => {
    res.json({
        msg: 'can1- con'
    });
}

const canalesPost = (req, res = response) => {
    res.json({
        msg: 'can2 - con'
    });
}

const canalesPut = (req, res = response) => {
    res.json({
        msg: 'can3 - con'
    });
}

const canalesDelete = (req, res = response) => {
    res.json({
        msg: 'can4 - con'
    });
}


module.exports = {
    canalesGet,
    canalesPost,
    canalesPut,
    canalesDelete
}