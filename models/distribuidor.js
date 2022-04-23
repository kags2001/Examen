const { Schema, model } = require('mongoose');

const DistribuidorSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'EL nombre es obligatorio']
    },
    codigo: {
        type: String,
        required: [true, 'El codigo es obligatorio']
    },
    correoN: {
        type: String,
        required: [true, 'El correo de notificacion es obligatorio'],
        unique: true
    },
    correoA: {
        type: String,
        required: [true, 'El correo de alertas es obligatorio'],
        unique: true
    },

});




module.exports = model('Distribuidor', DistribuidorSchema);