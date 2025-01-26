const { user } = require('pg/lib/defaults');
const Album = require('../models/albumModel');

// GET ALL ALBUMS
const getAlbums = async (req, res) => {
    try {
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

//Get By ID
const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await Album.findByPk(id);
        if (user) {
            res.status(200).json({
                message: "Successfully get data by id",
                data: user
            })
        } else {
            res.status(404).json({
                message: "Data id not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error get data by id',
            error: error.message
        })
    }
}

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

//DELETE DATA
const deleteAlbum = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await Album.findByPk(id);
        if (user) {
            await user.destroy();
            res.status(200).json({
                message: 'Successfully deleted album data',
                data: user
            })
        } else {
            res.status(404).json({
                message: 'Data not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error deleting user",
            error: error.message
        })
    }
}

const updateAlbum = async (req, res) => {
    const { id } = req.params;
    const { title, artist, price } = req.body;
    try {
        const user = await Album.findByPk(id);
        if (user) {
            user.title = title;
            user.artist = artist;
            user.price = price;
            await user.save();
            res.status(200).json({
                message: "Successfully update data album",
                data: user,
            });
        } else {
            res.status(404).json({
                message: 'Data not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error Update data",
            error: error.message
        })
    }
}

module.exports = {
    getAlbums,
    getById,
    createAlbum,
    updateAlbum,
    deleteAlbum,
};

