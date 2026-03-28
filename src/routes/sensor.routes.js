const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensor.controller');

router.post('/post_data', sensorController.postData);
router.get('/sensor-data', sensorController.getData);

module.exports = router;