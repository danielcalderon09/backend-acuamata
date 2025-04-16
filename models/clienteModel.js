const db = require('./db');

const Cliente = {
  getAll: (callback) => {
    db.query('SELECT * FROM clientes', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM clientes WHERE id = ?', [id], callback);
  },

  create: (cliente, callback) => {
    db.query('INSERT INTO clientes SET ?', cliente, callback);
  },

  update: (id, cliente, callback) => {
    db.query('UPDATE clientes SET ? WHERE id = ?', [cliente, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM clientes WHERE id = ?', [id], callback);
  },
};

module.exports = Cliente;
