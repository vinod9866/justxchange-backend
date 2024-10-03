import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/db.config';
import { ProductAttributes } from '../../api/interfaces/product.attributes';
import { commonFields } from './base.model';
import Category from './category.model';

class Product extends Model<ProductAttributes> implements ProductAttributes {
  public id!: number;
  public productName!: string;
  public amount!: number;
  public categoryId!: number;
  public userId!: number;
  public images!: string[];
  public condition!: string;

    // Define associations
    static associate(models: any) {
      // Define a relationship where the product belongs to a user
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
  
      this.belongsTo(models.Category, {
        foreignKey: 'category_id',
        as: 'category',
      });
    }
}

// Initialize Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'product_name',  // Map camelCase to snake_case
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'amount',  // Snake case by default
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id',
      },
      field: 'category_id',
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',  // Reference the 'users' table
        key: 'id',
      },
      field: 'user_id',
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),  // Use ARRAY for Postgres
      allowNull: true,
      field: 'images',  // Snake case by default
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ...commonFields()
  },
  {
    sequelize,
    tableName: 'products',  // Table name in snake_case
    timestamps: true,  // If you want createdAt and updatedAt fields
    underscored: true,  // Convert all fields to snake_case automatically
  }
);

// Product.belongsTo(Category, { foreignKey: 'categoryId' });
// Category.hasMany(Product, { foreignKey: 'categoryId' });  // One-to-many relation

export default Product;

