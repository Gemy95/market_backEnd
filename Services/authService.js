
var userModel = require("../Models/User");
var jwt = require ("jsonwebtoken");
const bcrypt = require('bcryptjs');

module.exports.registerNewUser =  async (user)=>{
    
      //  console.log("user="+ JSON.stringify (user) )    
/*
      var data = userModel.create(user,(err) => {
            if (err) { 
                console.log("from error service")
                return new Error({error: 'Invalid Email address'}) ;
            }
            else
            {
                console.log("from success service")
                return "success" ;
            }
        });
        
        console.log("data="+data)
        return data ;
*/ 
 return await userModel.create(user).then((data)=>{
    return  data ; 
  }).catch((err)=>{
    // console.log(err.name)
    if(err.code == 11000)
      return new Error ("Duplicate Email Or Phone Number");
    else
      return err ;    
  })

}


module.exports.loginUser = async (user)=>{

  // check if email found ?
  return await userModel.findOne({email:user.email}).then( async (data)=>{
    //console.log ("data="+JSON.stringify(data))
     if (!data)
     {
       return new Error ("Email not found");
     }
     else
     {
      return bcrypt.compare(user.password, data.password).then((result) => {
        if(result)
        {
          var token =  jwt.sign({email:user.email}, process.env.JWT_KEY || "jsonwedbtoken@market-aligamal&^%$#@")
          return{
            token : token ,
            data : data
          }
        }
        else
        {
          return new Error ("wrong password");
        }
    }).catch((err)=>{
      return new Error ("error in user login compare password");  
    });
     }
  }).catch((err)=>{
    //console.log("errrrrrr="+err)
      return new Error ("error in user login");   
  })

}


module.exports.userInfo =  async (id)=>{
  //console.log("id="+ typeof id)
 return await userModel.findOne({"_id":id}).then((data)=>{
   //console.log("dataaaaaaa="+data)
    return data ;
}).catch((err)=>{
    return err ;    
})

}
