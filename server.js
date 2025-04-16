const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Rutas
const clienteRoutes = require('./routes/clienteRoutes');
app.use('/api/clientes', clienteRoutes);

app.listen(port, () => {
  console.log(`Servidor backend corriendo en puerto ${port}`);
});
