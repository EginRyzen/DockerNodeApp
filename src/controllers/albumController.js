// import Album from '../models/albumModel';

// //Read (All Albums)
// const getAlbums = async (req, res) => {

//     // console.log(Album.findAll());

//     try {
//         const albums = await Album.findAll();
//         res.status(200).json({
//             message: 'Successfully fetched albums data',
//             data: albums
//         });
//     } catch (error) {
//         console.error('Error fetching albums data:', error); // Log error detail
//         res.status(500).json({
//             message: 'Error fetching albums data',
//             error: error.message, // Kirim pesan error ke response untuk debugging
//         });
//     }
// };


// module.exports = {
//     getAlbums
// }

import Album from '../models/albumModel';

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

module.exports = {
    getAlbums,
};
