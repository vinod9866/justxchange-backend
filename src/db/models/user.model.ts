import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/db.config';
import { BaseAttributes, commonFields } from './base.model';

export interface UserAttributes extends BaseAttributes {
    userId?: number;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    password: string;
    emailVerified: boolean;
    mobileVerified: boolean;
    college: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
    public userId!: number;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public mobile!: string;
    public password!: string;
    public emailVerified!: boolean;
    public mobileVerified!: boolean;
    public college!: string;

    static associate(models: any) {
        // Define one-to-many relationship with Product
        this.hasMany(models.Product, {
            foreignKey: 'user_id',
        });
    }
}

// Initialize User model
User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'user_id', // Custom column name for 'id'
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'first_name', // Custom column name for 'firstName'
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'last_name', // Custom column name for 'lastName'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            field: 'email_address', // Custom column name for 'email'
        },
        mobile: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            field: 'mobile_number', // Custom column name for 'mobile'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'password_hash', // Custom column name for 'password'
        },
        emailVerified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            field: 'email_verified', // Custom column name for 'emailVerified'
        },
        mobileVerified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            field: 'mobile_verified', // Custom column name for 'mobileVerified'
        },
        college: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'college_name', // Custom column name for 'college'
        },
        ...commonFields()
    },
    {
        sequelize,
        tableName: 'Users',
        timestamps: false,
    }
);

export default User;
