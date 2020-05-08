const mongoose = require('mongoose');

try
{
  //const URL = "mongodb://localhost/marketDB" 
  const URL = "mongodb+srv://ali95880:08081995ali@cluster0-1bit0.mongodb.net/marketDB?retryWrites=true&w=majority";
 
   mongoose.connect( URL , {
   useCreateIndex:true ,
   useNewUrlParser: true,
   useUnifiedTopology: true
}) ;

  console.log("connected to database successfully")
}
catch(err)
{
  console.log("error in connecting to database ")
}
