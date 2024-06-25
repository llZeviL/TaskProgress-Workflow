const mongoose = require('mongoose');

// Definir el esquema del usuario
const usuarioSchema = new mongoose.Schema({
  nombreUsuario: {
    type: String,
    required: true,
    unique: true
  },
  contrasena: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true,
    unique: true
  },
  rol: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  estado:{
    type: String,
    required: true
  }
});

// Crear el modelo de Usuario basado en el esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
