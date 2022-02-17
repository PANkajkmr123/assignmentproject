const mongoose=require('mongoose');

const userSchema=mongoose.Schema({

    firstName:{
        type:String
    },
    userId:{
        type:Number
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    countryCode:{
        type:String
    },
    mobileNumber:{
        type:String
    },
    password:{
        type:String
    },
    profileType:{
        type:String
    },
    profilePic:{
        type:String,
        default:"https://res.cloudinary.com/boss8055/image/upload/v1552474453/cs9axszxjxnomqncyjjl.jpg"
    },

    token:{
        type:String
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active'
    }
    },
{
    
        timestamps: true
    
}
)

var userModel= mongoose.model('users',userSchema);
module.exports=userModel