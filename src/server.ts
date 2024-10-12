import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './api/routes';
import cors from 'cors';

const swaggerDocument = require('./api/docs/swagger-output.json');
const swaggerUi = require('swagger-ui-express');

dotenv.config();

const app = express();

// Middleware for JSON parsing
app.use(express.json());
// CORS options
const corsOptions = {
    origin: '*', // Allow requests from your Next.js app
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 200, // For legacy browser support
};

// Use CORS middleware
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routes);

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Initialize models and then start the server
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
