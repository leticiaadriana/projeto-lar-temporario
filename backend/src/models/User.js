import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING, // senha hash
    allowNull: false,
  },
  firstAccess: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, // usuário precisa alterar senha no primeiro login
  },
});

export default User;
