
var userModel = require("../Models/User");

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
    return "success added" ; 
  }).catch((err)=>{
    //console.log(err.name)
    if(err.code == 11000)
      return new Error ("Duplicate Email Or Phone Number");
    else
      return err ;    
  })

}