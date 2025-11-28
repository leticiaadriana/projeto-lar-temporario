// models/Cat.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Cat = sequelize.define("Cat", {
  name: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  gender: { type: DataTypes.STRING, allowNull: false },
  age: { type: DataTypes.STRING, allowNull: false },
});

export default Cat;
