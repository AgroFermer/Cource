const multer = require('multer');
const Video = require('../models/video-model');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = file.originalname.split('.').pop();
    cb(null, uniqueSuffix + '.' + fileExtension);
  }
});

const upload = multer({ storage });

const uploadVideo = async (req, res) => {
  try {
    const { title } = req.body;
    const { filename } = req.file;

    // Создайте запись о видео в базе данных
    const video = await Video.create({ title, filename });

    res.status(201).json({ message: 'Video uploaded successfully', video });
  } catch (error) {
    console.log('Request:', req.body);
    console.error(error);
    res.status(500).json({ error: 'Failed to upload video' });
  }
};

module.exports = {
  uploadVideo,
  upload: upload.single('video') // Обновленный код
};
