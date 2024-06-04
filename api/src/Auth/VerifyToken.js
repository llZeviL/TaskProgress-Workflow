const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];
  
  // Verificar si el encabezado de autorización existe
  if (!authorizationHeader) {
    // Devolver un código de estado 401 y un mensaje indicando al cliente que redirija al inicio de sesión
    return res.status(401).json({ success: false, message: 'No se proporcionó ningún token. Redirigir al inicio de sesión.' });
  }

  // Verificar si el encabezado de autorización tiene el formato correcto (Bearer token)
  const parts = authorizationHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({ success: false, message: 'Formato de token inválido.' });
  }

  const token = parts[1]; // Extraer solo el token sin el prefijo "Bearer"

  jwt.verify(token, '1234', (err, decoded) => {
    if (err) {
      return res.status(401).json({ success: false, message: 'Token inválido.' });
    }

    req.userId = decoded.userId;
    next();
  });
};

module.exports = verifyToken;
