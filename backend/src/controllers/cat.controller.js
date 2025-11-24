const { Cat } = require('../models');
const minioClient = require('../config/minio');
const { v4: uuid } = require('uuid');

module.exports = {
  async list(req, res) {
    const cats = await Cat.findAll({ order: [['createdAt', 'DESC']] });
    res.json(cats);
  },

  async detail(req, res) {
    const { id } = req.params;
    const cat = await Cat.findByPk(id);
    if (!cat) return res.status(404).json({ error: 'Gatinho não encontrado' });
    res.json(cat);
  },

  async create(req, res) {
    const { name, age, sex, description } = req.body;
    const cat = await Cat.create({ name, age, sex, description });
    res.status(201).json(cat);
  },

  async update(req, res) {
    const { id } = req.params;
    const cat = await Cat.findByPk(id);
    if (!cat) return res.status(404).json({ error: 'Gatinho não encontrado' });
    await cat.update(req.body);
    res.json(cat);
  },

  async remove(req, res) {
    const { id } = req.params;
    const cat = await Cat.findByPk(id);
    if (!cat) return res.status(404).json({ error: 'Gatinho não encontrado' });
    await cat.destroy();
    res.json({ message: 'Gatinho removido' });
  },

  async uploadPhoto(req, res) {
    const { id } = req.params;
    const file = req.file;
    if (!file) return res.status(400).json({ error: 'Arquivo não enviado' });

    const cat = await Cat.findByPk(id);
    if (!cat) return res.status(404).json({ error: 'Gatinho não encontrado' });

    const key = `cats/${id}/${Date.now()}-${uuid()}-${file.originalname}`;

    try {
      await minioClient.putObject(process.env.MINIO_BUCKET, key, file.buffer, file.size, {
        'Content-Type': file.mimetype
      });

      const url = await minioClient.presignedUrl('GET', process.env.MINIO_BUCKET, key, 24 * 60 * 60);

      cat.imageUrl = url;
      cat.minioKey = key;
      await cat.save();

      return res.json({ message: 'Foto enviada', url });
    } catch (err) {
      console.error('MinIO upload error', err);
      return res.status(500).json({ error: 'Erro ao enviar arquivo' });
    }
  }
};
