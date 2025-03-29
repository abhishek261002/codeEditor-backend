import { DataTypes } from "sequelize";
import { sequelize } from "../db/index.js";

const Document = sequelize.define(
    "Document",
    {
        _id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        content:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        ownerId:{
            type: DataTypes.UUID,
            allowNull: false,
        },
        sharedWith:{
            type: DataTypes.ARRAY(DataTypes.UUID),
            defaultValue: [],
        },
        isPublic:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    },
    {
        tableName: "documents",
        timestamps: true
    }
)

export default Document;