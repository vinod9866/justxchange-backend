import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/db.config';
import { CategoryAttributes } from '../../api/interfaces/category.attributes';
import { commonFields } from './base.model';


class Category extends Model<CategoryAttributes> implements CategoryAttributes {
  public id!: number;
  public categoryName!: string;
}

Category.init(
  {
    categoryId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'category_id'
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
      field:'category_name'
    },
    ...commonFields()
  },
  {
    sequelize,
    tableName: 'categories',
    timestamps: false,
  }
);

export default Category;
