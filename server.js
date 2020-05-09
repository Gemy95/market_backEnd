var express = require ("express");
var app = express();

var bodyParser = require("body-parser");
var cors = require ("cors");
var mongoose = require ("mongoose");

require("./Configurations/ConnectionDB");

require("./Configurations/swaggerConfg")(app);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(function (error, req, res, next) {
    if(error instanceof SyntaxError){ //Handle SyntaxError here.
      return res.status(400).send({data : error.message});
    } else {
      next();
    }
  });

var authRoutes = require("./Routes/authRoutes");
 
app.use("/API",authRoutes);

app.get("/", (req,res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello From Home Page</h1>');
} );

app.listen(process.env.PORT||5000 ,()=>{
    console.log(`server is listening on port ${process.env.PORT||5000}`)
})

