const swaggerAutogen = require('swagger-autogen')({
    openapi: '3.0.0',
});

const doc = {
    info: {
        version: '1.0.0', // API version
        title: 'User API', // Title of the API
        description: 'API for managing users', // Description of the API
    },
    servers: [
        // List of servers
        {
            url: 'http://localhost:8090', // Your server's URL
        },
    ],
    components: {
        schemas: {
            category: {
                id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                categoryName: 'Electronics',
                createdDate: '2024-10-01T10:00:00Z',
                updatedDate: '2024-10-05T10:00:00Z',
                createdBy: 1,
                updatedBy: 1,
            },

            product: {
                id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                description: 'newly imported Laptop',
                productName: 'Laptop',
                amount: 999.99,
                categoryId: 1,
                userId: 1,
                images: [
                    'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg',
                ],
                condition: 'new',
                createdDate: '2024-10-10T16:48:50.133Z',
                updatedDate: '2024-10-10T16:48:50.133Z',
                createdBy: 1,
                updatedBy: 1,
            },
            ErrorResponse: {
                exceptionMessage: 'string',
            },
        },
    },
};

const outputFile = './swagger-output.json'; // File where swagger will be generated
const endpointsFiles = ['../../../src/server.ts']; // Your routes files

// Generate the swagger file
swaggerAutogen(outputFile, endpointsFiles, doc);
