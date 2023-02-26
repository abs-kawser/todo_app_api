const express =require('express');
const ProfileController=require("../controllers/ProfileController")
const ToDoListController=require("../controllers/ToDoListController")
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");

const router =express.Router();

router.post("/create-profile",ProfileController.CreateProfile)
router.post("/UserLogin",ProfileController.UserLogin)
router.get("/selectProfile",AuthVerifyMiddleware,ProfileController.SelectProfile)
router.post("/UpdateProfile",AuthVerifyMiddleware,ProfileController.UpdateProfile)


module.exports=router;

//http://localhost:3000/api/v1/UserLogin