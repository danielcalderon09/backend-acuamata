const Cliente = require('../models/clienteModel');

exports.getClientes = (req, res) => {
  Cliente.getAll((err, data) => {
    if (err) return res.status(500).send(err);
    res.json(data);
  });
};

exports.getClienteById = (req, res) => {
  const id = req.params.id;
  Cliente.getById(id, (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    res.json(results[0]);
  });
};

exports.createCliente = (req, res) => {
  const nuevoCliente = req.body;
  Cliente.create(nuevoCliente, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, ...nuevoCliente });
  });
};

exports.updateCliente = (req, res) => {
  const id = req.params.id;
  const cliente = req.body;
  Cliente.update(id, cliente, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ mensaje: 'Cliente actualizado correctamente' });
  });
};

exports.deleteCliente = (req, res) => {
  const id = req.params.id;
  Cliente.delete(id, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ mensaje: 'Cliente eliminado correctamente' });
  });
};
