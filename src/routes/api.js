const express =require('express');
const ProfileController=require("../controllers/ProfileController")
const ToDoListController=require("../controllers/ToDoListController")
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");

const router =express.Router();

router.post("/create-profile",ProfileController.CreateProfile)


module.exports=router;
