const bcrypt = require('bcrypt');
const { AdminUser } = require('../models');

async function createAdminIfNotExists() {
  const email = 'admin@ong.com';
  const exists = await AdminUser.findOne({ where: { email } });
  if (exists) {
    console.log('Admin já existe:', email);
    return;
  }
  const inicialPassword = 'l@r-Temporario123';

  await AdminUser.create({
    email,
    password: await bcrypt.hash(inicialPassword, 10),
    mustResetPassword: true
  });
  console.log("Admin criado! Email:", email, "Senha inicial: l@r-Temporario123");
}
module.exports = createAdminIfNotExists;
