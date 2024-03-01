const express = require("express");
const router = express.Router();
const { createHandler, findAllHandler, findTeacherByIdHandler, updateTeacherHandler,deleteTeacherHandler } = require("../controller/teacher_controller");
const { addUserHandler } = require('../controller/user_controller')
const { loginHandler } = require('../controller/auth_controler')
//routes teacher
router.post("/teacher", createHandler)
router.get("/teacher", findAllHandler )
router.get("/teacher/:id", findTeacherByIdHandler )
router.put("/teacher/:id", updateTeacherHandler )
router.delete("/teacher/:id", deleteTeacherHandler )


//user
router.post("/login", loginHandler)
router.post("/user", addUserHandler)

module.exports = router;
