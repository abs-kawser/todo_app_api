const express =require('express');
const ProfileController=require("../controllers/ProfileController")
const ToDoListController=require("../controllers/ToDoListController")
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");

const router =express.Router();

router.post("/create-profile",ProfileController.CreateProfile)
router.post("/UserLogin",ProfileController.UserLogin)
router.get("/SelectProfile",AuthVerifyMiddleware,ProfileController.SelectProfile)


module.exports=router;
