const deviceService = require('../services/device.service');

exports.registerDevice = async (req, res) => {
    try {
        const { device_id, device_type, location, status } = req.body;
        const result = await deviceService.insertDevice(device_id, device_type, location, status);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

exports.deleteDevice = async (req, res) => {
    try {
        const { device_id } = req.params;
        const result = await deviceService.deleteDevice(device_id);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

exports.updateDevice = async (req, res) => {
    try {
        const { device_id } = req.params;
        const updated_fields = req.body;
        const result = await deviceService.updateDevice(device_id, updated_fields);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

exports.getDevicesByZone = async (req, res) => {
    try {        
        const { zone_id } = req.params;
        const data = await deviceService.getDevicesByZone(zone_id);
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

exports.updateConnectionStatus = async (req, res) => {
    try {
        const { device_id } = req.params;
        const { connection_status } = req.body;
        const result = await deviceService.isconnected(device_id, connection_status);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

exports.updateActiveStatus = async (req, res) => {
    try {
        const { device_id } = req.params;
        const { is_active } = req.body;
        const result = await deviceService.isactive(device_id, is_active);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

