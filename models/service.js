const db = require('../db');

const Service = {
  getAll: (callback) => db.query('SELECT * FROM services', callback),
  getById: (id, callback) => db.query('SELECT * FROM services WHERE id = ?', [id], callback),
  create: (data, callback) => {
    const { title, description } = data;
    db.query('INSERT INTO services (title, description) VALUES (?, ?)', [title, description], callback);
  },
  update: (id, data, callback) => {
    const { title, description } = data;
    db.query('UPDATE services SET title = ?, description = ? WHERE id = ?', [title, description, id], callback);
  },
  delete: (id, callback) => db.query('DELETE FROM services WHERE id = ?', [id], callback)
};

module.exports = Service;
