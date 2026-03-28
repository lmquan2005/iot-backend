const zoneService = require('../services/zone.service');

exports.createZone = async (req, res) => {
    try {
        const { name, description } = req.body;
        const result = await zoneService.createZone(name, description);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

exports.updateZone = async (req, res) => {
    try {
        const { zone_id } = req.params;
        const updated_fields = req.body;
        const result = await zoneService.updateZone(zone_id, updated_fields);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

exports.getZone = async (req, res) => {
    try {
        const { zone_id } = req.params;
        const data = await zoneService.getZone(zone_id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};