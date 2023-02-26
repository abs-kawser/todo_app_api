var jwt = require('jsonwebtoken');

module.exports=(req,res,next)=>{
     let Token=req.headers["token-key"]
     jwt.verify(Token,"SecretKey123456789", (err,decoded)=>{
              if (err) {
                  res.status(401).json({status:"unauthorized"})
              } 
              else {
                //get user name from decode token 
        let username=decoded['data']['UserName'];
        req.headers.username=username


                 next()
              }
     })
};