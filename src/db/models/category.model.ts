import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/db.config';
import { CategoryAttributes } from '../../api/interfaces/category.attributes';


class Category extends Model<CategoryAttributes> implements CategoryAttributes {
  public id!: number;
  public name!: string;
}

Category.init(
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
  },
  {
    sequelize,
    tableName: 'categories',
  }
);

export default Category;
