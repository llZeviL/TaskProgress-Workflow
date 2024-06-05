const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  numeroSolicitud: {
    type: Number,
    required: true,
    unique: true
  },
  fechaIngreso: {
    type: String,
    required: true
  },
  empresa: {
    type: String,
    required: true
  },
  nombreUsuario: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  motivo: {
    type: String,
    required: true
  },
  submotivo: {
    type: String,
    required: true
  },
  observacion: {
    type: String,
    required: true
  },
  alarma: {
    type: String,
    required: true
  }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
