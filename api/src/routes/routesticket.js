const express = require('express');

const { 
    getAllTickets, 
    getTicketById, 
    createTicket, 
    deleteTicketById, 
    updateTicketById 
} = require('../controllers/controllerticket.js');

const router = express.Router();

router.get('/tickets', async (req, res) => {
    try {
        const tickets = await getAllTickets();
        res.json(tickets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/tickets/:id', async (req, res) => {
    try {
        const ticket = await getTicketById(req.params.id);
        res.json(ticket);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/tickets', async (req, res) => {
    try {
        const result = await createTicket(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/tickets/:id', async (req, res) => {
    try {
        const deletedCount = await deleteTicketById(req.params.id);
        res.json({ deletedCount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/tickets/:id', async (req, res) => {
    try {
        const modifiedCount = await updateTicketById(req.params.id, req.body);
        res.json({ modifiedCount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
