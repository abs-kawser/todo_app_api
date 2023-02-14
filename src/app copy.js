// // Basic Lib Import
// const express =require('express');
// const router =require('./src/routes/api');
// const app= new express();
// const bodyParser =require('body-parser');

// // Security Middleware Lib Import
// const rateLimit =require('express-rate-limit');
// const helmet =require('helmet');
// const mongoSanitize =require('express-mongo-sanitize');
// const xss =require('xss-clean');
// const hpp =require('hpp');
// const cors =require('cors');

// const mongoose =require('mongoose');

// // Body Parser Implement
// //app.use(bodyParser.json())

// // Request Rate Limit
// // const limiter= rateLimit({windowMs:15*60*1000,max:3000})
// // app.use(limiter)

// // Routing Implement
// // app.use("/api/v1",router)
// router.get('/testing', function (req, res) {
//     res.send('Birds home page')
//   })


// // Mongo DB Database Connection
// let URI="mongodb+srv://kawser:kawser@cluster0.refdpyx.mongodb.net/?retryWrites=true&w=majority";
// let OPTION={autoIndex:true}
// mongoose.connect(URI,OPTION,(error)=>{
//     console.log("Connection Success")
//     console.log(error)
// })




// // Undefined Route Implement
// app.use("*",(req,res)=>{
//     res.status(404).json({status:"fail",data:"Not Found"})
// })

// module.exports=app;