const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Función para verificar el token JWT
function verificarToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'No se proporcionó un token' });
  }

  jwt.verify(token, '1234', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    // Si el token es válido, decodificado contiene la información del usuario (u otra información relevante)
    req.user = decoded;
    next(); // Llama al siguiente middleware
  });
}


module.exports = verificarToken;