var authService = require("../Services/authService")
var mongoose = require("mongoose");

module.exports.registerNewUser = async (req,res)=>{
    try
    {
      // console.log("req.body="+ JSON.stringify(req.body))
        let user = req.body ;
        user._id = new mongoose.Types.ObjectId();

        var result = await authService.registerNewUser(user); 
        console.log("result="+ JSON.stringify(result))
        if(result instanceof Error)
        {
            console.log("from error controller")
            res.status(400).json({
                message :"register new user failed"
            });
        }
        else
        {
            console.log("from success controller")
            res.status(200).json({
                message :"register new user successfully",
                data :[]
            });
        }
    }
    catch(err)
    {
        console.log("from error controller")
        res.status(400).json({
            message :"register new user failed"
        });
    }

}