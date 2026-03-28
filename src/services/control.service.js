const pool = require('../config/db');
const { runQuery } = require('../utils/db');

exports.takedatafromDevice = async (device_id, current_params, current_state) => {
    const sql = 'INSERT INTO CONTROL_DEVICE (DEVICE_ID, CURRENT_PARAMS, CURRENT_STATE) VALUES (?, ?, ?)';
    await runQuery(sql, [device_id, current_params, current_state]);
    return { message: 'Lưu vào MySQL thành công!' };
}

exports.controlDevice = async (device_id, new_params) => {
    const [rows] = await pool.query('SELECT * FROM CONTROL_DEVICE WHERE DEVICE_ID = ? ORDER BY CONTROL_AT DESC LIMIT 1', [device_id]);
    if (rows.length === 0) {
        throw new Error('Device not found');
    }
    const current_data = rows[0];
    const updated_params = { ...current_data.CURRENT_PARAMS, ...new_params };
    const sql = 'UPDATE CONTROL_DEVICE SET CURRENT_PARAMS = ? WHERE DEVICE_ID = ?';
    await runQuery(sql, [updated_params, device_id]);
    return { message: 'Cập nhật thiết bị thành công!' };
};

exports.shceduleControl = async (device_id, zone_id, start_time, end_time, updated_at, name, apply_level, repeat_type, repeat_day, specific_days, status, created_by) => {
    const sql = 'INSERT INTO SCHEDULE (DEVICE_ID, ZONE_ID, START_TIME, END_TIME, UPDATED_AT, NAME, APPLY_LEVEL, REPEAT_TYPE, REPEAT_DAY, SPECIFIC_DAYS, STATUS, CREATED_BY) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    await runQuery(sql, [device_id, zone_id, start_time, end_time, updated_at, name, apply_level, repeat_type, repeat_day, specific_days, status, created_by]);
    return { message: 'Lưu lịch trình thành công!' };
};

exports.getSchedule = async (zone_id) => {
    const [rows] = await pool.query('SELECT * FROM SCHEDULE WHERE ZONE_ID = ?', [zone_id]);
    return rows;
};

exports.deleteSchedule = async (schedule_id) => {
    const sql = 'DELETE FROM SCHEDULE WHERE ID = ?';
    await runQuery(sql, [schedule_id]);
    return { message: 'Xóa lịch trình thành công!' };
};

exports.updateSchedule = async (schedule_id, updated_fields) => {
    const setClause = Object.keys(updated_fields).map(key => `${key} = ?`).join(', ');
    const values = Object.values(updated_fields);
    values.push(schedule_id);
    const sql = `UPDATE SCHEDULE SET ${setClause} WHERE ID = ?`;
    await runQuery(sql, values);
    return { message: 'Cập nhật lịch trình thành công!' };
};

