const controlService = require('../services/control.service');

exports.controlDevice = async (req, res) => {
    try {
        const { device_id, new_params } = req.body;
        const result = await controlService.controlDevice(device_id, new_params);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

exports.takedatafromDevice = async (req, res) => {
    try {
        const { device_id, current_params, current_state } = req.body;
        const result = await controlService.takedatafromDevice(device_id, current_params, current_state);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

exports.shceduleControl = async (req, res) => {
    try {
        const { device_id, zone_id, start_time, end_time, updated_at, name, apply_level, repeat_type, repeat_day, specific_days, status, created_by } = req.body;
        const result = await controlService.shceduleControl(device_id, zone_id, start_time, end_time, updated_at, name, apply_level, repeat_type, repeat_day, specific_days, status, created_by);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

exports.getSchedule = async (req, res) => {
    try {
        const { zone_id } = req.params;
        const data = await controlService.getSchedule(zone_id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteSchedule = async (req, res) => {
    try {        
        const { schedule_id } = req.params;
        const result = await controlService.deleteSchedule(schedule_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateSchedule = async (req, res) => {
    try {
        const { schedule_id } = req.params;
        const updated_fields = req.body;
        const result = await controlService.updateSchedule(schedule_id, updated_fields);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
