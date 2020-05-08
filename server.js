var express = require ("express");
var app = express();

var bodyParser = require("body-parser");
var cors = require ("cors");
var mongoose = require ("mongoose");

require("./Configurations/ConnectionDB");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/*
  user1 ={_id:new mongoose.Types.ObjectId(),name:'ali',email:'ali.gamal95880@gmail.com',
 password:'12345'}  
*/

/*
  userModel.find({})
  .then(doc => console.log(doc))
  .catch(err => console.log('ERROR 💥:', err));
*/

app.use(function (error, req, res, next) {
    if(error instanceof SyntaxError){ //Handle SyntaxError here.
      return res.status(400).send({data : error.message});
    } else {
      next();
    }
  });

var authRoutes = require("./Routes/authRoutes");
 
app.use("/API",authRoutes);

app.listen(process.env.PORT||5000 ,()=>{
    console.log(`server is listening on port ${process.env.PORT||5000}`)
})

