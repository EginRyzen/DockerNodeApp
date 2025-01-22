const { Sequelize } = require('sequelize');

// Gunakan environment variables untuk koneksi
const sequelize = new Sequelize({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '12345',
    database: process.env.DB_NAME || 'postgres',
    dialect: 'postgres',
});

module.exports = sequelize;

