import express from 'express';

const {
    getAlbums
} = require('../controllers/albumController');

const router = express.Router();

router.get('/albums', getAlbums);

module.exports = router;