// models/contadorModel.js
const db = require('./db');

const Contador = {
  getAll: (callback) => {
    db.query(
      `SELECT contadores.*, clientes.nombre AS cliente_nombre 
       FROM contadores 
       JOIN clientes ON contadores.cliente_id = clientes.id`,
      callback
    );
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM contadores WHERE id = ?', [id], callback);
  },

  

  create: (contador, callback) => {
    db.query('INSERT INTO contadores SET ?', contador, callback);
  },

  update: (id, contador, callback) => {
    db.query('UPDATE contadores SET ? WHERE id = ?', [contador, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM contadores WHERE id = ?', [id], callback);
  },

  getByClienteId: (clienteId, callback) => {
    db.query(
      `SELECT * FROM contadores WHERE cliente_id = ?`,
      [clienteId],
      callback
    );
  }

};



module.exports = Contador;
