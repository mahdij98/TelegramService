const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

console.log('Initializing Swagger configuration...');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Telegram Bot API',
      version: '1.0.0',
      description: 'API documentation for Telegram Bot',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Local server',
      },
    ],
  },
  apis: ['src/routes/*.js'], 
};

const specs = swaggerJsdoc(options);

console.log('Swagger configuration initialized successfully.');

module.exports = { specs, swaggerUi };