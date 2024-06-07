const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authorizationHeader = req.headers['authorization']; // Obtener el encabezado de autorización
    if (!authorizationHeader) {
        return res.status(403).json({ message: 'Token no proporcionado' });
    }

    // Separar el prefijo "Bearer" del token
    const token = authorizationHeader.split(' ')[1];
    if (!token) {
        return res.status(403).json({ message: 'Token no proporcionado correctamente' });
    }

    jwt.verify(token, '1234', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }
        req.user = decoded.userId; // Decodificar el token y extraer el ID de usuario
        next();
    });
};

module.exports = { verifyToken };
