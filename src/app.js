const express = require('express');
const userRoutes = require('./routes/albumRouter');
const sequelize = require('./config/db');

const app = express();

app.use(express.json());
app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the REST API Node js');
})

sequelize.sync()
    .then(() => {
        app.listen(3002, '0.0.0.0', () => {
            console.log('Server running on port 3002');
        });
    })
    .catch(err => {
        console.log('Error syncing database:', err);
    });

