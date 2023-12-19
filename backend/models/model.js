const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name: String,
    path: String,
    size: Number,
    type: String,
})

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;