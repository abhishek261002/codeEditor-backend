//Tracks users currently collaborating on a document (real-time editing).
import { DataTypes } from "sequelize";
import { sequelize } from "../db/index.js"; 

const Collab = sequelize.define({
    _id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    docId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    userIds: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        defaultValue: [],
        allowNull: false
    },
    socketId : {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
{
    tableName: "collabs",
    timestamps: true,
}
)

export default Collab;