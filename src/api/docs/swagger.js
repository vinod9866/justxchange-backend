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
};

const outputFile = './swagger-output.json'; // File where swagger will be generated
const endpointsFiles = ['../../../src/server.ts']; // Your routes files

// Generate the swagger file
swaggerAutogen(outputFile, endpointsFiles, doc);
