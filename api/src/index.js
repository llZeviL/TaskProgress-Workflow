const express = require('express');
const app = express();
const routes = require('./routes/routes.js');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el paquete cors

// Middleware para permitir CORS
app.use(cors());

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());


app.use(express.json());
app.use('/api', routes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});



