const express =require('express');
const ProfileController=require("../controllers/ProfileController")
const ToDoListController=require("../controllers/ToDoListController")
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");

const router =express.Router();

router.post("/create-profile",ProfileController.CreateProfile)
router.post("/UserLogin",ProfileController.UserLogin)
router.get("/selectProfile",AuthVerifyMiddleware,ProfileController.SelectProfile)
router.post("/UpdateProfile",AuthVerifyMiddleware,ProfileController.UpdateProfile)


//todo -api
router.post("/CreateToDo",AuthVerifyMiddleware,ToDoListController.CreateToDo)
router.get("/SelectToDo",AuthVerifyMiddleware,ToDoListController.SelectToDo)
router.post("/UpdateToDo",AuthVerifyMiddleware,ToDoListController.UpdateToDo);
router.post("/UpdateStatusToDo",AuthVerifyMiddleware,ToDoListController.UpdateStatusToDo);


 router.post("/RemoveToDo",AuthVerifyMiddleware,ToDoListController.RemoveToDo);
 router.post("/SelectToDoByStatus",AuthVerifyMiddleware,ToDoListController.SelectToDoByStatus);
 router.post("/SelectToDoByDate",AuthVerifyMiddleware,ToDoListController.SelectToDoByDate);
 module.exports=router;

//http://localhost:3000/api/v1/UserLogin