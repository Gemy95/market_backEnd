
module.exports = (expressSwagger)=>{

var hostURL = "" ;

if ( process.env.ENVIROMENT = "PRO")
{
    hostURL = "https://market999-app.herokuapp.com" 
}
else
{
    hostURL = `localhost:${process.env.PORT||5000}` 
}

let options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: hostURL,
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