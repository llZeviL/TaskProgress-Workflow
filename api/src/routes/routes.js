const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerusers.js');
const Auth = require('../Auth/Auth.js');
const AuthWeb = require('../Auth/AuthWeb.js');


router.get('/verificarToken',  (req, res) => {
    res.json({ valid: true, user: req.user });
});
router.post('/login', Auth.login);

router.use(AuthWeb.verifyToken);

router.get('/users', async (req, res) => {
    try {
        const users = await controller.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



router.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await controller.getUserById(id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/users',  async (req, res) => {
    const data = req.body;
    try {
        const newUser = await controller.createUser(data);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/users/:id',  async (req, res) => {
    const id = req.params.id;
    const newData = req.body;
    try {
        const updatedCount = await controller.updateUserById(id, newData);
        if (updatedCount > 0) {
            res.json({ message: 'Datos actualizados correctamente' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deletedUser = await controller.deleteUserById(id);
        res.json({ message: `${deletedUser} usuario(s) eliminado(s)` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
