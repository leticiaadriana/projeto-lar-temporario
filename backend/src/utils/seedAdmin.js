const bcrypt = require('bcrypt');
const { AdminUser } = require('../models');

async function createAdminIfNotExists() {
  const email = 'admin@ong.com';
  const exists = await AdminUser.findOne({ where: { email } });

  const inicialPassword = '123';

  await AdminUser.create({
    email,
    password: await bcrypt.hash(inicialPassword, 10),
    mustResetPassword: true
  });
}
module.exports = createAdminIfNotExists;
