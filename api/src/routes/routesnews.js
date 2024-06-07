const express = require('express');
const router = express.Router();
const { 
    agregarNoticia,
    getAllNoticias,
    getNoticiaById,
    eliminarNoticiaById
} = require('../controllers/controllernews.js');

router.get('/noticias', async (req, res) => {
    try {
        const noticias = await getAllNoticias();
        res.json(noticias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/noticias/:id', async (req, res) => {
    try {
        const noticia = await getNoticiaById(req.params.id);
        res.json(noticia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/noticias', async (req, res) => {
    try {
        const noticia = await agregarNoticia(req.body);
        res.status(201).json(noticia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/noticias/:id', async (req, res) => {
    try {
        const deletedCount = await eliminarNoticiaById(req.params.id);
        res.json({ deletedCount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
