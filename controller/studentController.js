const express = require("express");
const prisma = require("../config/db");
const {
  createStudent,
  getAllStudents,
  updateStudentById,
  deleteStudentById
} = require("../usecase/student_usecase");

const router = express.Router();

router.post("/addStudent", async (req, res) => {
  try {
    const newStudentData = req.body;
    const student = await createStudent(newStudentData);

    res.json({
      data: student,
      message: "Student created successfully",
    });
  } catch (error) {
    res.status(400).json({
      error: "Failed to create student",
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  const students = await getAllStudents();
  res.send(students);
});

router.put("/:id", async (req, res) => {
  const studentId = req.params.id;
  const studentData = req.body;

  if (!(studentData.name && studentData.kelas)) {
    return res.status(400).send("some field are missing");
  }

  const student = await updateStudentById(studentId, studentData);

  res.send({
    data: student,
    message: "update student success",
  });
});

router.delete("/:id", async (req,res) => {
  try {
    const studentId = req.params.id
    await deleteStudentById(studentId)

    res.send("student delete success")
  } catch (error) {
    res.status(400).send(error.message)
  }
})

module.exports = router;
