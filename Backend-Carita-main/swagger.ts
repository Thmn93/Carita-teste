import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'API Carita',
    description: 'Documentação da API do projeto Carita',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.ts'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);