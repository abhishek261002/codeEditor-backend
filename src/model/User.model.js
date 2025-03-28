import { DataTypes } from "sequelize";
import { sequelize } from "../db/index.js"; // Use the existing sequelize instance

const User = sequelize.define(
  "User",
  {
    _id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    fullName: { type: DataTypes.STRING,
         allowNull: false 
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      lowercase: true,
      set(value){
        this.setDataValue("username", value.toLowerCase());
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

export default User;
