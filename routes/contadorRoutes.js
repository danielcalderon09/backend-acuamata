const express = require('express');
const router = express.Router();
const contadorController = require('../controllers/contadorController');

router.get('/', contadorController.getContadores);
router.get('/:id', contadorController.getContadorById);
router.get('/cliente/:clienteId', contadorController.getContadoresPorCliente);
router.post('/', contadorController.createContador);
router.put('/:id', contadorController.updateContador);
router.delete('/:id', contadorController.deleteContador);


module.exports = router;
