const { ObjectId } = require('mongodb');
const { connectDB } = require('../db/db.js');
const Usuario = require('../models/usermodel.js');

async function getAllUsers() {
    const db = await connectDB();
    const collection = db.collection('usuario');
    return await collection.find({}).toArray();
}

async function getUserById(id) {
    try {
        const db = await connectDB(); // Conecta a la base de datos
        const collection = db.collection('usuario');
        const usuario = await collection.findOne({ _id: new ObjectId(id) }); // Busca el usuario por ID
        if (!usuario) {
            throw new Error('Usuario no encontrado.'); // Lanza un error si no se encuentra el usuario
        }
        return usuario; // Devuelve el usuario encontrado
    } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
      
        throw error; // Re-lanza el error para que sea manejado por el controlador que llama a esta función
    }
}

async function createUser(data) {
    const db = await connectDB();
    const collection = db.collection('usuario');
    const result = await collection.insertOne(data);
    console.log(result);
    return result;
}

async function deleteUserById(id) {
    const db = await connectDB();
    const collection = db.collection('usuario');
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount;
}

async function updateUserById(id, newData) {
    const db = await connectDB();
    const collection = db.collection('usuario');
    const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: newData }
    );
    return result.modifiedCount;
}

module.exports = { 
    getAllUsers, 
    getUserById, 
    createUser, 
    deleteUserById, 
    updateUserById
};