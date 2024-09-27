import sequelize from '../../config/db.config';
import Category from './category.model';
import Product from './product.model';

// Sync the models with the database
sequelize.sync({ alter: true }).then(() => {
  console.log('Database & tables created!');
});

export { Category, Product };
