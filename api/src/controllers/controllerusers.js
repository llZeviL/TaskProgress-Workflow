const { ObjectId } = require('mongodb');
const { connectDB } = require('../db/db.js');
const Usuario = require('../models/usermodel.js');

async function getAllUsers() {
    const db = await connectDB();
    const collection = db.collection('usuario');
    return await collection.find({}).toArray();
}

async function getUserById(id) {
    const db = await connectDB();
    const collection = db.collection('usuario');
    return await collection.findOne({ _id: new ObjectId(id) });
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