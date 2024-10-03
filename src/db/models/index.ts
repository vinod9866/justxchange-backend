import User from './user.model';
import Product from './product.model';
import Category from './category.model';
import sequelize from '../../config/db.config'; // Assuming you have this file configured for Sequelize


// Sync models with database, including associations
const initializeModels = async () => {
    // Initialize associations
    User.associate({ Product });
    Product.associate({ User, Category });
    // Category.associate({ Product });
  
    try {
      // Sync Sequelize models with the database
      await sequelize;
      console.log('Database synchronized');
    } catch (error) {
      console.error('Error synchronizing database:', error);
    }
};

export default initializeModels;