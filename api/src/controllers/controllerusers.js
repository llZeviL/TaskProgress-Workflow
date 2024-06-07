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
        const db = await connectDB();
        const collection = db.collection('usuario');
        const usuario = await collection.findOne({ _id: new ObjectId(id) });
        if (!usuario) {
            throw new Error('Usuario no encontrado.');
        }
        return usuario;
    } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
        throw error;
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
    try {
        const db = await connectDB(); // Conecta a la base de datos
        const collection = db.collection('usuario'); // Selecciona la colección de usuarios

        // Elimina el campo _id del objeto newData para evitar actualizarlo
        delete newData._id;

        const result = await collection.updateOne(
            { _id: new ObjectId(id) }, // Filtra el usuario por su ID
            { $set: newData } // Utiliza $set para especificar los campos que queremos actualizar
        );

        // Verifica si se encontró y actualizó el usuario
        if (result.modifiedCount === 0) {
            // Si no se encuentra el usuario, lanza un error con un mensaje personalizado
            throw new Error('No se encontró ningún usuario con el ID proporcionado');
        }

        // Si se encuentra y actualiza el usuario, devuelve el número de documentos modificados
        return result.modifiedCount;
    } catch (error) {
        // Maneja cualquier error que pueda ocurrir durante la actualización del usuario
        console.error('Error al actualizar usuario:', error);
        throw error; // Lanza el error para que sea manejado en el controlador
    }
}



module.exports = { 
    getAllUsers, 
    getUserById, 
    createUser, 
    deleteUserById, 
    updateUserById
};
