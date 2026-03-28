const express = require('express');
const sensorRoutes = require('./src/routes/sensor.routes');
const controlRoutes = require('./src/routes/control.routes');

const app = express();

app.use(express.json());

app.use('/api/sensors', sensorRoutes);
app.use('/api/controls', controlRoutes);
app.use('/api/zones', require('./src/routes/zone.routes'));
app.use('/api/devices', require('./src/routes/device.routes'));

module.exports = app;