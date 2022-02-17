let USERMODEL = require("../Models/userModel")

module.exports={
   userSignup : async (req,res) => {
    let reqt = req.body
    if(!reqt.email || !reqt.mobileNumber){
        return res.json({code:503 , message:"Email/Mobile missing please Fill the fileds"})
    }
    let chck = await USERMODEL.findOne({'email':reqt.email})
    if(chck){
        return res.json({code:400 , message:"User Already Exits Please try with another Email/Mobile"})
    }else{
        let chck = await USERMODEL.find({}).count()
        let obj = {
            firstName:reqt.firstName,
            lastName:reqt.lastName,
            userId:(1+Number(chck)),
            email:reqt.email,
            mobileNumber:reqt.mobileNumber,
            profilePic:reqt.profilePic,
           
           
          }
        let data = await new USERMODEL(obj).save()
        return res.json({code:200 , message:"Data Successfully Store in DataBase" , result:data})
    }
}


}
