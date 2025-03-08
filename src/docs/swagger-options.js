import * as path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Proyecto Backend3',
            version: '1.0.0',
            description : 'Proyecto final del curso de Backend 3'
        }
    },
    apis: [path.resolve('./src/docs/**/*.yaml')]
}

export const specs = swaggerJSDoc(swaggerOptions);