const ProfileModel = require("../models/ProfileModel");
var jwt = require('jsonwebtoken');


//user create 
exports.CreateProfile = (req, res) => {
    console.log(req.body);
    let reqBody = req.body;
    ProfileModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: "fail", data: err })
        }
        else {
            res.status(200).json({ status: "success", data: data })
        }
    })
};

//User Login 
exports.UserLogin = (req, res) => {
    console.log(req.body);
    let reqBody = req.body;

    let UserName = reqBody["UserName"];
    let Password = reqBody["Password"];

    ProfileModel.find({ UserName: UserName, Password: Password }, (err, data) => {
        if (err) {
            res.status(400).json({ status: "unauthorized" })

        }
        if (data.length > 0) {
            // Create Auth Token
            let Payload = { exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), data: data[0] }
            let token = jwt.sign(Payload, 'SecretKey123456789');
            //return token also 
            res.status(200).json({ status: "success", token: token, data: data[0] })

        } else {
            res.status(401).json({ status: "unauthorized" })

        }
    })

};

//select profile 
exports.SelectProfile = (req, res) => {
    
    ProfileModel.find({ UserName: UserName }, (err, data) => {
        if (err) {
            res.status(400).json({ status: "unauthorized" })

        }
        else {
            res.status(200).json({ status: "success", data: data })

        }
    })
}

