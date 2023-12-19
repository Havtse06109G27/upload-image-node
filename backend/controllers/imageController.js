const imageService = require('../services/imageService')

const imageController = {
    // upload image
    uploadImage: async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).send('Please upload a file');
            }

            const { filename, path, size, mimetype } = req.file;

            const uploadStatus = await imageService.uploadImageToDB(filename, path, size, mimetype);

            res.status(201).send(uploadStatus);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllImages: async (req, res) => {
        try {
            const allImages = await imageService.getAllImagesFromDB();
            res.status(200).json(allImages);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = imageController;