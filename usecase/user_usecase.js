const { error } = require("console");
const prisma = require("../config/db");

const {
  registerUser,
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser
} = require("../repository/user_repository");

const createUser = async (newUserData) => {
  const user = await registerUser(newUserData);

  return user;
};

const getAllUsers = async () => {
  const users = await findAllUsers();

  return users;
};

const getUserById = async (user_id) => {
  const user = await findUserById(user_id);

  if (!user) {
    throw Error("user not found");
  }

  return user;
};

const updateUserByUserId = async (user_id, newUserData) => {
  await getUserById(user_id);

  const user = await updateUser(user_id, newUserData);

  return user;
};

const deletUserById = async (user_id)=> {
  await getUserById(user_id)

  await deleteUser(user_id)
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserByUserId,
  deletUserById
};
