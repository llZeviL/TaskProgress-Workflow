const { ObjectId } = require('mongodb');
const { connectDB } = require('../db/db.js');

async function getAllTickets() {
    const db = await connectDB();
    const collection = db.collection('tickets');
    return await collection.find({}).toArray();
}

async function getTicketById(id) {
    try {
        const db = await connectDB();
        const collection = db.collection('tickets');
        const ticket = await collection.findOne({ _id: new ObjectId(id) });
        if (!ticket) {
            throw new Error('Ticket no encontrado.');
        }
        return ticket;
    } catch (error) {
        console.error('Error al obtener datos del ticket:', error);
        throw error;
    }
}

async function createTicket(data) {
  const db = await connectDB();
  const collection = db.collection('tickets');

  // Obtén el número actual de tickets
  const ticketCount = await collection.countDocuments();

  // Asigna un valor autoincremental al campo numeroSolicitud
  data.numeroSolicitud = ticketCount + 1;

  const result = await collection.insertOne(data);
  console.log(result);
  return result;
}


async function deleteTicketById(id) {
    const db = await connectDB();
    const collection = db.collection('tickets');
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount;
}

async function updateTicketById(id, newData) {
    const db = await connectDB();
    const collection = db.collection('tickets');
    const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: newData }
    );
    return result.modifiedCount;
}

module.exports = { 
    getAllTickets, 
    getTicketById, 
    createTicket, 
    deleteTicketById, 
    updateTicketById
};
