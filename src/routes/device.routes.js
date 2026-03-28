const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/device.controller');

router.post('/register', deviceController.registerDevice);
router.delete('/delete/:device_id', deviceController.deleteDevice);
router.put('/update/:device_id', deviceController.updateDevice);
router.get('/zone/:zone_id', deviceController.getDevicesByZone);
router.put('/connection-status/:device_id', deviceController.updateConnectionStatus);
router.put('/active-status/:device_id', deviceController.updateActiveStatus);

module.exports = router;