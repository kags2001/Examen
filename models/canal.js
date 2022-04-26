const { Schema, model } = require('mongoose');

const CanalSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'nombre es obligatorio']
    },
    codigo: {
        type: String,
        unique: true
    },
    distribuidor: {
        type: Schema.Types.ObjectId,
        ref: 'Distribuidor',
        required: true
    }

});




module.exports = model('Canal', CanalSchema);