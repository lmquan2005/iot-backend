const express = require('express');
const router = express.Router();
const zoneController = require('../controllers/zone.controller');

router.post('/create', zoneController.createZone);
router.put('/update/:zone_id', zoneController.updateZone);
router.get('/:zone_id', zoneController.getZone);

module.exports = router;