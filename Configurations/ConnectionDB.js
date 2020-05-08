const mongoose = require('mongoose')
try
{
 var connectDB= mongoose.connect("mongodb://localhost/marketDB", {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex:true
})
  console.log("connected to database successfully")
}
catch(err)
{
  console.log("error in connecting to database ")
}
