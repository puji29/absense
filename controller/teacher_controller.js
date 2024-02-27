const {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacherById,
  deleteTeacherById
} = require("../usecase/teacher_usecase");
const { param } = require("./user_controller");

const createHandler = async (req, res) => {
  try {
    const newTeacherData = req.body;
    const teacher = await createTeacher(newTeacherData);

    res.json({
      data: teacher,
      message: "created teacher successfully",
    });
  } catch (error) {
    res.status(400).send("failed created teacher");
  }
};

const findAllHandler = async (req, res) => {
  const teachers = await getAllTeachers();

  res.send(teachers);
};

const findTeacherByIdHandler = async (req, res) => {
  try {
    const teacherId = req.params.id;
    const teacher = await getTeacherById(teacherId);

    res.send({
      data: teacher,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateTeacherHandler = async (req, res) => {
  const teacherId = req.params.id;
  const teacherData = req.body;

  if (!teacherData.name) {
    return res.status(400).send("missing field");
  }
  const teacher = await updateTeacherById(teacherId, teacherData);

  res.send({
    data: teacher,
    message: "updated teacher succesfully",
  });
};

const deleteTeacherHandler = async (req,res) => {
  try {
    const teacherId = req.params.id
    await deleteTeacherById(id)

    res.send("deleted teacher succesfully")
  } catch (error) {
    res.status(400).send("failed deleted teacher")
    
  }
}
module.exports = {
  createHandler,
  findAllHandler,
  findTeacherByIdHandler,
  updateTeacherHandler,
  deleteTeacherHandler
};
