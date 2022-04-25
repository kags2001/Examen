const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'EL nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, ' el password es obligatorio']
    },
    rol: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'uSER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },



});

UsuarioSchema.methods.toJSON = function() {
    const { __v, password, _id, ...usuario } = this.toObject();
    usuario.uid = _id;
    return usuario;
}




module.exports = model('Usuario', UsuarioSchema);