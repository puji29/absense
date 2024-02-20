const prisma = require("../config/db");
const {
  insertStudent,
  findStudents,
  findStudentById,
  updateStudent,
  deleteStudent
} = require("../repository/students_repository");

const createStudent = async (newStudentData) => {
  const student = await insertStudent(newStudentData);

  return student;
};

const getAllStudents = async () => {
  const students = await findStudents();

  return students;
};

const getStudentById = async (id) => {
    const student = await findStudentById(id)

    if (!student){
        throw Error("student not found")
    }

    return student
}

const updateStudentById = async (id,studentData) => {
    await getStudentById(id)

    const student = await updateStudent(id, studentData)

    return student
}

const deleteStudentById = async (id) => {
    await getStudentById(id)

    await deleteStudent(id)
}

module.exports = {
  createStudent,
  getAllStudents,
  updateStudentById,
  deleteStudentById
};
