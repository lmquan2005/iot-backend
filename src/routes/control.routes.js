const express = require('express');
const router = express.Router();
const controlController = require('../controllers/control.controller');

router.post('/control', controlController.controlDevice);

module.exports = router;