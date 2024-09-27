import express, { Application } from 'express';
import bodyParser from 'body-parser';
import router from './api/routes/product.routes';
import sequelize from './config/db.config';

// Sync database
sequelize.authenticate().then(() => {
  console.log('Connected to the database.');
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});

const app: Application = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', router);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
