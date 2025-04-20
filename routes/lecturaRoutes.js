const express = require('express');
const router = express.Router();
const lecturaController = require('../controllers/lecturaController');

router.post('/', lecturaController.guardarLectura);

module.exports = router;