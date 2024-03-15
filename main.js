const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('blog.db');

const createUserTable = () => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        email TEXT,
        password TEXT
    )`, (err) => {
        if (err) {
            console.error('Error creating users table:', err.message);
        } else {
            console.log('Users table created successfully');
        }
    });
};

const addUser = (username, email, password) => {
    db.run(`INSERT INTO users (username, email, password) VALUES (?, ?, ?)`, [username, email, password], (err) => {
        if (err) {
            console.error('Error inserting user:', err.message);
        } else {
            console.log('User inserted successfully');
        }
    });
};

const getUsers = () => {
    db.all(`SELECT * FROM users`, (err, rows) => {
        if (err) {
            console.error('Error retrieving users:', err.message);
        } else {
            console.log('All users:', rows);
        }
    });
};

const updateUser = (id, username, email, password) => {
    db.run(`UPDATE users SET username=?, email=?, password=? WHERE id=?`, [username, email, password, id], (err) => {
        if (err) {
            console.error('Error updating user:', err.message);
        } else {
            console.log('User updated successfully');
        }
    });
};

const deleteUser = (id) => {
    db.run(`DELETE FROM users WHERE id=?`, [id], (err) => {
        if (err) {
            console.error('Error deleting user:', err.message);
        } else {
            console.log('User deleted successfully');
        }
    });
};

createUserTable();

module.exports = {
    db,
    addUser,
    getUsers,
    updateUser,
    deleteUser
};