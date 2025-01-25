const { user } = require('pg/lib/defaults');
const Album = require('../models/albumModel');

// GET ALL ALBUMS
const getAlbums = async (req, res) => {
    try {
        console.log('Testing database connection...');
        await Album.sequelize.authenticate(); // Mengecek koneksi database
        console.log('Database connection is successful.');

        console.log('Fetching albums...');
        const albums = await Album.findAll();
        console.log('Albums fetched successfully:', albums);

        res.status(200).json({
            message: 'Successfully fetched albums data',
            data: albums,
        });
    } catch (error) {
        console.error('Error fetching albums data:', error.message);
        res.status(500).json({
            message: 'Error fetching albums data',
            error: error.message, // Kirim pesan error ke response untuk debugging
        });
    }
};

// Create User
const createAlbum = async (req, res) => {
    const { title, artist, price } = req.body;
    try {
        const user = await Album.create({
            title,
            artist,
            price,
        });

        res.status(201).json({
            message: 'Successfully created album data',
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error creating album data',
            error: error.message
        })
    }
}

module.exports = {
    getAlbums,
    createAlbum,
};
