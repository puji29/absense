const express = require("express");
const router = express.Router();
const { createHandler, findAllHandler, findTeacherByIdHandler, updateTeacherHandler,deleteTeacherHandler } = require("../controller/teacher_controller");

//routes teacher
router.post("/teacher", createHandler)
router.get("/teacher", findAllHandler )
router.get("/teacher/:id", findTeacherByIdHandler )
router.put("/teacher/:id", updateTeacherHandler )
router.delete("/teacher/:id", deleteTeacherHandler )

module.exports = router;
