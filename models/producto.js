const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    codigo: {
        type: Number,
        required: [true, 'El codigo es obligatorio']
    },
    Descripcion: {
        type: String,
        required: [true, 'La descripcion es obligatoria'],
        unique: true
    },
    monto: {
        type: Number,
        required: [true, 'EL monto es obligatorio'],
        unique: true
    },
    distribuidor: {
        type: Schema.Types.ObjectId,
        ref: 'Distribuidor',
        required: true
    }

});




module.exports = model('Producto', ProductoSchema);