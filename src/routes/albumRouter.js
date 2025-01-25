const express = require('express');

const {
    getAlbums,
    createAlbum
} = require('../controllers/albumController');

const router = express.Router();

// Route untuk mengambil semua data album
router.get('/albums', getAlbums);

// Route untuk created data album
router.post('/albums', createAlbum);

module.exports = router;