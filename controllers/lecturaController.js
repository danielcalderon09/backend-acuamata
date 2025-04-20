const db = require('../models/db');

exports.guardarLectura = (req, res) => {
  const { contador_id, fecha, consumo } = req.body;

  if (!contador_id || !fecha || !consumo) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  // Primero insertamos la lectura
  const insertQuery = 'INSERT INTO lecturas (contador_id, fecha, consumo) VALUES (?, ?, ?)';
  db.query(insertQuery, [contador_id, fecha, consumo], (err, result) => {
    if (err) {
      console.error('Error al guardar la lectura:', err);
      return res.status(500).json({ error: 'Error al guardar la lectura' });
    }

    // Luego actualizamos la tabla de contadores con la última lectura
    const updateQuery = `
      UPDATE contadores 
      SET ultima_lectura_fecha = ?, ultima_lectura_valor = ? 
      WHERE id = ?
    `;
    db.query(updateQuery, [fecha, consumo, contador_id], (err2) => {
      if (err2) {
        console.error('Error al actualizar contador:', err2);
        return res.status(500).json({ error: 'Lectura guardada, pero fallo al actualizar el contador' });
      }

      res.status(201).json({ mensaje: 'Lectura guardada y contador actualizado exitosamente', id: result.insertId });
    });
  });
};
