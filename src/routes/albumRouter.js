const express = require('express');

const {
    getAlbums,
    createAlbum,
    deleteAlbum
} = require('../controllers/albumController');

const router = express.Router();

// Route untuk mengambil semua data album
router.get('/albums', getAlbums);

// Route untuk created data album
router.post('/albums', createAlbum);

//Route untuk menghapus data album
router.delete('/albums/:id', deleteAlbum);

module.exports = router;