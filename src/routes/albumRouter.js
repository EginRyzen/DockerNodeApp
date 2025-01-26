const express = require('express');

const {
    getAlbums,
    getById,
    createAlbum,
    updateAlbum,
    deleteAlbum
} = require('../controllers/albumController');

const router = express.Router();

// Route untuk mengambil semua data album
router.get('/albums', getAlbums);

//Route untuk get data by id
router.get('/albums/:id', getById);

// Route untuk created data album
router.post('/albums', createAlbum);

//Route untuk update data album
router.put('/albums/:id', updateAlbum);

//Route untuk menghapus data album
router.delete('/albums/:id', deleteAlbum);

module.exports = router;