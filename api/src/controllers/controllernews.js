const { connectDB } = require('../db/db.js'); // Asegúrate de tener un archivo para conectar a la base de datos
const { ObjectId } = require('mongodb'); // Importa ObjectId desde mongodb
const Noticia = require('../models/newsmodel.js');


async function agregarNoticia(nuevaNoticia) {
  try {
    const db = await connectDB();
    const collection = db.collection('noticias');
    const result = await collection.insertOne(nuevaNoticia);
    if (result.insertedCount === 0) {
      throw new Error('No se pudo agregar la noticia.');
    }
  } catch (error) {
    console.error('Error al agregar la noticia:', error);
    throw error;
  }
}

async function getAllNoticias() {
  try {
    const db = await connectDB();
    const collection = db.collection('noticias');
    return await collection.find({}).toArray();
  } catch (error) {
    console.error('Error al obtener todas las noticias:', error);
    throw error;
  }
}

async function getNoticiaById(id) {
  try {
    const db = await connectDB();
    const collection = db.collection('noticias');
    const noticia = await collection.findOne({ _id: new ObjectId(id) });
    if (!noticia) {
      throw new Error('Noticia no encontrada.');
    }
    return noticia;
  } catch (error) {
    console.error('Error al obtener datos de la noticia:', error);
    throw error;
  }
}

async function eliminarNoticiaById(id) {
  try {
    const db = await connectDB();
    const collection = db.collection('noticias');
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      throw new Error('No se pudo eliminar la noticia.');
    }
  } catch (error) {
    console.error('Error al eliminar la noticia:', error);
    throw error;
  }
}

module.exports = {
  agregarNoticia,
  getAllNoticias,
  getNoticiaById,
  eliminarNoticiaById,
};
