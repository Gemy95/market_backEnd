
module.exports = (app)=>{

const expressSwagger = require('express-swagger-generator')(app);

let options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: `localhost:${process.env.PORT||5000}`,
        basePath: '',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'token',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['../Routes/**/*.js'] //Path to the API handle folder
};
expressSwagger(options) ;

}