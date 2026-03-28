const pool = require('../config/db');
const { runQuery } = require('../utils/db');

// Sửa lại hàm này để gửi dữ liệu với ID tương ứng cho từng loại cảm biến
exports.insertSensorData = async ({ id, t, h, s, l }) => {
  t = t ?? 0;
  h = h ?? 0;
  s = s ?? 0;
  l = l ?? 0;

  const now = new Date();

  const values = [
    ["T" + id, t, now],
    ["H" + id, h, now],
    ["S" + id, s, now],
    ["L" + id, l, now]
  ];

  const sql = `INSERT INTO SENSOR_DATA (DEVICE_ID, DATA_VALUE, RECORD_AT) VALUES ?`;

  await pool.query(sql, [values]);

  return { message: 'Lưu vào MySQL thành công!' };
};

exports.getLatestSensorData = async () => {
  const sql = `SELECT * FROM SENSOR_DATA ORDER BY RECORD_AT DESC LIMIT 20`;
  return await runQuery(sql);
};