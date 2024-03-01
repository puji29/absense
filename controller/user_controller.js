
const prisma = require("../config/db");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserByUserId,
  deletUserById,
} = require("../usecase/user_usecase");


const addUserHandler = async (req, res) => {
  try {
    const newUserData = req.body;
    const user = await createUser(newUserData);

    res.json({
      data: user,
      message: "created user succesfully",
    });
  } catch (error) {
    res.status(400).json({
      error: "failed created user",
      message: error.message,
    });
  }
};

const findAllHandler = async (req, res) => {
  const users = await getAllUsers();

  res.send(users);
};

const findUserByIdHandler = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await getUserById(userId);

    res.send({
      data: user,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateUserHandler = async (req, res) => {
  const userId = req.params.id;
  const userData = req.body;

  if (!(userData.username && userData.password && userData.role)) {
    return res.status(400).send("some filed are missing");
  }
  const user = await updateUserByUserId(userId, userData);

  res.send({
    data: user,
    message: "updated user succesfully",
  });
};

const deleteUserHandler = async (req, res) => {
  try {
    const userId = req.params.id;
    await deletUserById(userId);

    res.send("delete user succesfully");
  } catch (error) {
    res.status(400).send("failed deleted user", error.message);
  }
};

module.exports = {
  addUserHandler,
  findAllHandler,
  findUserByIdHandler,
  updateUserHandler,
  deleteUserHandler
}
