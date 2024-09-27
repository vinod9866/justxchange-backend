import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/db.config';
import Category from './category.model';

export interface ProductAttributes {
  id?: number;
  name: string;
  price: number;
  categoryId: number;
}

class Product extends Model<ProductAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public price!: number;
  public categoryId!: number;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'products',
  }
);

// Define the relationship
Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

export default Product;
