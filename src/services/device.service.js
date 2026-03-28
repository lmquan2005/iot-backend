const pool = require('../config/db');
const { runQuery } = require('../utils/db');

exports.insertDevice = async (device_id, name, device_type, zone_id) => {
    const sql = 'INSERT INTO DEVICE (DEVICE_ID, NAME, DEVICE_TYPE, ZONE_ID) VALUES (?, ?, ?, ?)';
    await runQuery(sql, [device_id, name, device_type, zone_id]);
    return { message: 'Lưu vào MySQL thành công!' };
};

exports.deleteDevice = async (device_id) => {
    const sql = 'DELETE FROM DEVICE WHERE DEVICE_ID = ?';
    await runQuery(sql, [device_id]);
    return { message: 'Xóa thiết bị thành công!' };
};

exports.updateDevice = async (device_id, updated_fields) => {
    const setClause = Object.keys(updated_fields).map(key => `${key} = ?`).join(', ');
    const values = Object.values(updated_fields);
    values.push(device_id);
    const sql = `UPDATE DEVICE SET ${setClause} WHERE DEVICE_ID = ?`;
    await runQuery(sql, values);
    return { message: 'Cập nhật thiết bị thành công!' };
};

exports.getDevicesByZone = async (zone_id) => {
    const [rows] = await pool.query('SELECT * FROM DEVICE WHERE ZONE_ID = ?', [zone_id]);
    return rows;
};

exports.isconnected = async (device_id, conection_status) => {
    const sql = 'UPDATE DEVICE SET CONNECTION_STATUS = ? WHERE DEVICE_ID = ?';
    await runQuery(sql, [conection_status, device_id]);
    return { message: 'Cập nhật trạng thái kết nối thành công!' };
};

exports.isactive = async (device_id, is_active) => {
    const sql = 'UPDATE DEVICE SET IS_ACTIVE = ? WHERE DEVICE_ID = ?';
    await runQuery(sql, [is_active, device_id]);
    return { message: 'Cập nhật trạng thái hoạt động thành công!' };
};

