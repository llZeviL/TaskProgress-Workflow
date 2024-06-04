const { MongoClient } = require('mongodb');
const { connected } = require('process');

const MONGO_URI = "mongodb+srv://richard:Ravv2000.@workflow.w1utlsh.mongodb.net/WorkFlow";

const client = new MongoClient(MONGO_URI);

async function connectDB() {
    try {
        await client.connect();
        console.log("Conectado a MongoDB Atlas");
        const db = client.db('WorkFlow');

        // Realizar una operación de prueba para verificar la conexión
        const collection = db.collection('usuarios');
        const result = await collection.findOne({}); // Intenta encontrar un documento en la colección 'usuarios'
        console.log("Operación de prueba realizada con éxito:", result);

        return db;
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
}
connectDB();
module.exports = { connectDB };
