const prisma = require("../config/db");

const insertStudent = async (studentData) => {
  const student = await prisma.student.create({
    data: {
      name: studentData.name,
      kelas: studentData.kelas,
      created_at: studentData.created_at,
      updated_at: studentData.updated_at,
    },
  });

  return student;
};

const findStudents = async () => {
  const students = await prisma.student.findMany();

  return students;
};

const findStudentById = async (id) => {
  const student = await prisma.student.findUnique({
    where: {
      id,
    },
  });

  return student;
};

const updateStudent = async (id, studentData) => {
  const student = await prisma.student.update({
    where: {
      id: id,
    },
    data: {
      name: studentData.name,
      kelas: studentData.kelas,
      updated_at: new Date(),
    },
  });
  return student;
};

const deleteStudent = async (id) => {
    await prisma.student.delete({
        where: {
            id,
        },
    })
}

module.exports = {
  findStudents,
  insertStudent,
  findStudentById,
  updateStudent,
  deleteStudent
};
