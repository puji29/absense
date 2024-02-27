const bcrypt = require("bcrypt");
const prisma = require("../config/db");

const registerUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = await prisma.user.create({
    data: {
      username: userData.username,
      password: hashedPassword,
      role: userData.role,
      created_at: userData.created_at,
      updated_at: userData.updated_at,
    },
  });
  return user;
};

const findAllUsers = async () => {
  const user = await prisma.user.findMany();

  return user;
};

const findUserById = async (user_id) => {
  const user = await prisma.user.findUnique({
    where: {
      user_id,
    },
  });

  return user;
};

const updateUser = async (user_id, userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = await prisma.user.update({
    where: {
      user_id,
    },
    data: {
      username: userData.username,
      password: hashedPassword,
      role: userData.role,
      updated_at: new Date(),
    },
  });
  return user;
};

const deleteUser = async (user_id) => {
  const user = await prisma.user.delete({
    where: {
      user_id: user_id ,
    },
  });
};

module.exports = {
  registerUser,
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser
};
