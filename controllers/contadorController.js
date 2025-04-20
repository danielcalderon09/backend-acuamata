const Contador = require('../models/contadorModel');

// Función para generar un número de serie automático
function generarNumeroSerie() {
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeros = Math.floor(100000 + Math.random() * 900000);
  const letra1 = letras[Math.floor(Math.random() * letras.length)];
  const letra2 = letras[Math.floor(Math.random() * letras.length)];
  return `${letra1}${letra2}${numeros}`;
}

exports.getContadores = (req, res) => {
  Contador.getAll((err, data) => {
    if (err) return res.status(500).send(err);
    res.json(data);
  });
};

exports.getContadorById = (req, res) => {
  const id = req.params.id;
  Contador.getById(id, (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).json({ mensaje: 'Contador no encontrado' });
    res.json(results[0]);
  });
};

exports.createContador = (req, res) => {
  const nuevoContador = {
    ...req.body,
    numero_serie: generarNumeroSerie()
  };

  Contador.create(nuevoContador, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, ...nuevoContador });
  });
};

exports.updateContador = (req, res) => {
  const id = req.params.id;
  const contador = req.body;
  Contador.update(id, contador, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ mensaje: 'Contador actualizado correctamente' });
  });
};


exports.deleteContador = (req, res) => {
  const id = req.params.id;
  Contador.delete(id, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ mensaje: 'Contador eliminado correctamente' });
  });

  
};

exports.getContadoresPorCliente = (req, res) => {
    const clienteId = req.params.clienteId;
    Contador.getByClienteId(clienteId, (err, data) => {
      if (err) return res.status(500).send(err);
      res.json(data);
    });
  };