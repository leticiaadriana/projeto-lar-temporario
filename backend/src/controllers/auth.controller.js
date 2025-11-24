const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { AdminUser } = require('../models');

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email e senha são obrigatórios' });

    const user = await AdminUser.findOne({ where: { email } });
    if (!user) return res.status(400).json({ error: 'Usuário não encontrado' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: 'Senha inválida' });

    if (user.mustResetPassword) {
      return res.json({
        firstAccess: true,
        message: "Você precisa criar uma nova senha antes de continuar."
    });
}

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.json({token, user: { id: user.id, name: user.name, email: user.email }
    });
  },

  async resetInitialPassword(req, res) {
    const { email, newPassword } = req.body;

    const user = await AdminUser.findOne({ where: { email } });
    if (!user)
      return res.status(400).json({ error: "Usuário não encontrado" });

    if (!user.mustResetPassword)
      return res.status(400).json({ error: "Senha já foi definida anteriormente" });

    user.password = await bcrypt.hash(newPassword, 10);
    user.mustResetPassword = false;
    await user.save();

    return res.json({ message: "Senha alterada com sucesso!" });
  }
};

