const prisma = require("../config/db");

const addTeacher = async (teacherData) => {
  const teacher = await prisma.teacher.create({
    data: {
      user_id: teacherData.user_id,
      name: teacherData.name,
      created_at: teacherData.created_at,
      updated_at: teacherData.updated_at,
    },
  });
  return teacher;
};

const findAllTeachers = async () => {
  const teachers = await prisma.teacher.findMany();

  return teachers;
};

const findTeacherById = async (id) => {
  const teacher = await prisma.teacher.findUnique({
    where: {
      id,
    },
  });

  return teacher;
};

const updateTeacher = async (id, newTeacherData) => {
  const teacher = await prisma.teacher.update({
    where: {
      id,
    },
    data: {
      name: newTeacherData.name,
      updated_at: newTeacherData.updated_at,
    },
  });
  return teacher;
};

const deleteTeacher = async (id) => {
  const teacher = await prisma.teacher.delete({
    where: {
      id: id,
    },
  });
};

module.exports = {
  addTeacher,
  findAllTeachers,
  findTeacherById,
  updateTeacher,
  deleteTeacher
};
