const sensorService = require('../services/sensor.service');

exports.postData = async (req, res) => {
  try {
    const result = await sensorService.insertSensorData(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

exports.getData = async (req, res) => {
  try {
    const data = await sensorService.getLatestSensorData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};