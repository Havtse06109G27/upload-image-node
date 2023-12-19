const Image = require('../models/model');

async function uploadImageToDB(filename, path, size, type) {
    try {
        const newImage = new Image({
            name: filename,
            path: path.replace("\\", "/"),
            size: size,
            type: type,
        });

        await newImage.save();
        return 'File uploaded successfully';
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getAllImagesFromDB() {
    try {
        const allImages = await Image.find();
        return allImages;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    uploadImageToDB,
    getAllImagesFromDB
};