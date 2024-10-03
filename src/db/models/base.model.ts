import { DataTypes, Model, Sequelize } from 'sequelize';
import sequelize from '../../config/db.config';

export interface BaseAttributes {
    createdDate?: Date;
    updateDate?: Date;
    createdBy?: number;
    updatedBy?: number;
}

export function commonFields() {
    return {
        createdDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updateDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        createdBy: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 1,
        },
        updatedBy: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 1,
        },
    }
}

// export default BaseModel;
