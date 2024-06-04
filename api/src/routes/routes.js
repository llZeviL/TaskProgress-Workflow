const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerusers.js');
const Auth = require ('../Auth/Auth.js');
const verifyToken = require ('../Auth/VerifyToken.js')
const verificarToken = require('../Auth/AuthWeb.js')

router.get('/verificarToken', verificarToken, (req, res) => {
    // Si llegamos aquí, significa que el token es válido
    res.json({ valid: true, user: req.user });
  });

router.get('/users', verifyToken , async (req, res) => {
    const users = await controller.getAllUsers();
    res.json(users);
});

router.get('/users/:id', verifyToken , async (req, res) => {
    const id = req.params.id;
    const users = await controller.getUsersById(id);
    res.json(users);
});

router.post('/users', verifyToken , async (req, res) => {
    const data = req.body;
    const newUser = await controller.createUser(data);
    res.json(newUser);
});

router.delete('/users/:id', verifyToken , async (req, res) => {
    const id = req.params.id;
    const deletedUser = await controller.deleteUserById(id);
    res.json({ message: `${deletedUser} usuario(s) eliminado(s)` });
});

router.post('/login', Auth.login);


module.exports = router;
