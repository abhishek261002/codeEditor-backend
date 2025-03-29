import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";

const Chat = sequelize.define(
    "Chat",
    {
        _id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        docId:{
            type: DataTypes.UUID,
            allowNull: false,
        },
        senderId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        tableName: "chats",
        timestamps: true,
    }
)

export default Chat;