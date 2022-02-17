const express=require('express');
const userController=require('../Controller/userController')
const router=express.Router();

router.post('/userSignup',userController.userSignup);




module.exports=router