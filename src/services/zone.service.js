const pool = require('../config/db');
const { runQuery } = require('../utils/db');

exports.insertZone = async (name, description, area_size,) => {
    const sql = 'INSERT INTO ZONE (NAME, DESCRIPTION, AREA_SIZE, CREATED_AT) VALUES (?, ?, ?, NOW())';
    await runQuery(sql, [name, description, area_size]);
    return { message: 'Lưu vào MySQL thành công!' };
};

exports.updateZone = async (zone_id, updated_fields) => {
    const setClause = Object.keys(updated_fields).map(key => `${key} = ?`).join(', ');
    const values = Object.values(updated_fields);
    values.push(zone_id);
    const sql = `UPDATE ZONE SET ${setClause} WHERE ID = ?`;
    await runQuery(sql, values);
    return { message: 'Cập nhật khu vực thành công!' };
};

exports.getZones = async (zone_id) => {
    const sql = 'SELECT * FROM ZONE WHERE ID = ?';
    const [rows] = await runQuery(sql, [zone_id]);
    return rows;
};