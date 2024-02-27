const { error } = require("console");
const prisma = require("../config/db");

const {
  addTeacher,
  findAllTeachers,
  findTeacherById,
  updateTeacher,
  deleteTeacher
} = require("../repository/teacher_repository");

const createTeacher = async (newTeacherData) => {
  const teacher = await addTeacher(newTeacherData);

  return teacher;
};

const getAllTeachers = async () => {
  const teacher = await findAllTeachers();

  return teacher;
};

const getTeacherById = async (id) => {
  const teacher = await findTeacherById(id);

  if (!teacher) {
    throw Error("teacher not found");
  }

  return teacher;
};

const updateTeacherById = async (id, newTeacherData) => {
  await getTeacherById(id);

  const teacher = await updateTeacher(id, newTeacherData);

  return teacher;
};

const deleteTeacherById = async(id) => {
  await getTeacherById(id)

  await deleteTeacher(id)
}

module.exports = {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacherById,
  deleteTeacherById
};
