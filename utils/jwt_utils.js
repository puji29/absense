const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
const prisma = require("../config/db");

require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;


const createToken = (user) => {
  const token = jwt.sign(
    {
      user_id: user.user_id,
      role: user.role,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: '1h',
      algorithm: "HS256",
    }
  );
  return token;
};

const verifyToken = async (token) => {
    try {
        const decode = jwt.verify(token, SECRET_KEY, { algorithms: ['HS256']})

        const user = await prisma.user.findUnique({
            where: { user_id: decode.user_id},
        })

        if (!user){
            return null
        }

        return decode
    } catch (error) {
        return null;
    }
}

module.exports = {
    createToken,
    verifyToken
}
