const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'nombre es obligatorio']
    },
    Descripcion: {
        type: String,
        unique: true
    },
    monto: {
        type: Number,
        unique: true
    },
    distribuidor: {
        type: Schema.Types.ObjectId,
        ref: 'Distribuidor',
        required: true
    }

});




module.exports = model('Producto', ProductoSchema);