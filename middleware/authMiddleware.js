const jwtUtils = require("../utils/jwt_utils");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  try {
    if (!token || !token.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Invalid token format" });
    }

    const decode = await jwtUtils.verifyToken(token.split(" ")[1]);

    req.user = decode;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

module.exports = authMiddleware;
