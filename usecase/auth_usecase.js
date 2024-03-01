const bcrypt = require('bcrypt')
const prisma = require("../config/db")
const jwtUtils = require('../utils/jwt_utils')

const authenticationUser = async (username, password) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                username: username,
            },
        });

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return null;
        }

        return user;
    } catch (error) {
        console.error(error);
        throw new Error("Authentication failed");
    }
};



const loginUser = async (username,password) => {
    const user = await authenticationUser(username,password)

    if (!user) {
        return null
    }

    const token = jwtUtils.createToken(user)

    return {user, token}
}

module.exports = {
    authenticationUser,
    loginUser
}