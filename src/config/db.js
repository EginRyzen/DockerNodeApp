import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '12345',
    database: process.env.DB_NAME || 'postgres',
    dialect: 'postgres',
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    }
};

// Panggil fungsi untuk menguji koneksi
testConnection();

export default sequelize;
