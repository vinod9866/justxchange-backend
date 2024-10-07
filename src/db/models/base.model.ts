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
            field: 'created_date'
        },
        updatedDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: 'updated_date'
        },
        createdBy: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 1,
            field: 'created_by'
        },
        updatedBy: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 1,
            field: 'updated_by'
        },
    }
}

// export default BaseModel;
