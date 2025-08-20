const pool = require('./pool');

async function getAllMessages() {
    const { rows } = await pool.query('SELECT * FROM messages');
    return rows;
}

async function getMessageById(id) {
    return await pool.query('SELECT * FROM messages WHERE id = $1', [id]);
}

async function createMessage(username, text, created_at) {
    return await pool.query('INSERT INTO messages (username, text, created_at) VALUES ($1, $2, $3)', [username, text, created_at]);
}

module.exports = {
    getAllMessages,
    getMessageById,
    createMessage
}