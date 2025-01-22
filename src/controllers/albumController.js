const user = require('../models/albumModel');

//Read (All Albums)
const getAlbums = async (req, res) => {
    try {
        const albums = await albums.findAll();
        res.status(200).json({
            message: 'Successfully fetched albums data',
            data: albums
        });
    } catch (error) {
        console.error('Error fetching albums data:', error); // Log error detail
        res.status(500).json({
            message: 'Error fetching albums data',
            error: error.message, // Kirim pesan error ke response untuk debugging
        });
    }
};


module.exports = {
    getAlbums
}