const express = require('express');
const multer = require('multer');
const path = require('path');
const imageController = require('../controllers/imageController');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    },
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), imageController.uploadImage);

router.get('/images', imageController.getAllImages);

module.exports = router;