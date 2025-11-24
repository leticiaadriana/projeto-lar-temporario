const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { sequelize } = require('./models');
const createAdminIfNotExists = require('./utils/seedAdmin');

const authRoutes = require('./routes/auth.routes');
const catRoutes = require('./routes/cat.routes');

const app = express();
app.use(cors());
app.use(express.json());

// rotas
app.use('/auth', authRoutes);
app.use('/cats', catRoutes);

app.get('/', (req, res) => res.json({ ok: true }));

async function syncDb() {
  try {
    await sequelize.authenticate();
    console.log('DB conectado');
    await sequelize.sync(); 
    console.log('Models sincronizados');
    await createAdminIfNotExists();
  } catch (err) {
    console.error('Erro DB', err);
    process.exit(1);
  }
}
syncDb();

module.exports = app;
