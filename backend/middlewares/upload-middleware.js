const upload = require('../middlewares/upload-middleware');

// ...

const uploadVideo = async (req, res) => {
  try {
    const { title } = req.body;
    const { filename } = req.file;

    // Дополнительный код для сохранения информации о видео в базе данных

    res.status(201).json({ message: 'Video uploaded successfully' });
  } catch (error) {
    console.log('Request:', req.body);
    console.error(error);
    res.status(500).json({ error: 'Failed to upload video' });
  }
};

module.exports = {
  uploadVideo,
  upload: upload // Используйте экспортированный upload из middleware
};
