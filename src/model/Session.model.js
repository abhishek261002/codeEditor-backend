import { DataTypes } from "sequelize";
import { sequelize } from "../db/index.js"; // Use the existing sequelize instance

const Sesssion = sequelize.define(
    "Session",
    {
        _id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        refreshToken: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        expiresAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: "sessions",
        timestamps: true,
    }
)