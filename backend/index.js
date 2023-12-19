const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotevn = require('dotenv');
const imageRoutes = require('./routes/image')
const path = require('path');

dotevn.config();
const mongodb = process.env.MONGODB_URL;
mongoose.connect(mongodb, {});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB Atlas!');
});

const port = process.env.HOST;
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

app.use('/api', imageRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.listen(port, () => {
    console.log("Server is running...");
})