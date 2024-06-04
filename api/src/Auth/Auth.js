const jwt = require('jsonwebtoken');
const Usuario = require('../models/usermodel.js');
const {connectDB} = require('../db/db.js')

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, '1234', { expiresIn: '10s' }); // Cambia 'secret_key' por tu clave secreta y ajusta el tiempo de expiración según tus necesidades
  return token;
};


async function findUserByUsernameAndPassword(username, password) {
  const db = await connectDB();
  const collection = db.collection('usuario');
  return await collection.findOne({ nombreUsuario: username, contrasena: password });
}


async function login(req, res) {
  const { nombreUsuario, contrasena } = req.body;

  try {
      const usuario = await findUserByUsernameAndPassword(nombreUsuario, contrasena);

      if (usuario) {
          console.log('Inicio de sesión exitoso:', usuario); // Mensaje de éxito en la consola

          // Generar un token para el usuario
          const token = generateToken(usuario._id); // Suponiendo que el ID del usuario está en el campo "_id"
          // Devolver el token como parte de la respuesta
          res.json({ success: true, message: 'Inicio de sesión exitoso', token });
      } else {
          console.log('Credenciales incorrectas'); // Mensaje de credenciales incorrectas en la consola
          res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
      }
  } catch (error) {
      console.error('Error al buscar usuario en la base de datos:', error);
      res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
}




module.exports = {generateToken,login};