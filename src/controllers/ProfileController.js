const ProfileModel = require("../models/ProfileModel");
var jwt = require('jsonwebtoken');

exports.CreateProfile=(req,res)=>{
    console.log(req.body);
    let reqBody=req.body;
    ProfileModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}