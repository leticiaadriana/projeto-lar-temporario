const sequelize = require('../config/database');
const AdminUser = require('./AdminUser');
const Cat = require('./Cat');

module.exports = {
  sequelize,
  AdminUser,
  Cat
};
