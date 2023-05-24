require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { Sequelize } = require('sequelize');
const router = require('./router/index');
const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use('/api', router);
app.use(errorMiddleware);

const sequelize = new Sequelize('fc497068_db', 'fc497068_db', 'FvHZuxJY', {
    host: 'fc497068.mysql.tools',
    dialect: 'mysql'
  });


const start = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
    } catch (e) {
        console.log('Unable to connect to the database:', e);
    }
};

start();
