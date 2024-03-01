const authUsecase = require("../usecase/auth_usecase");

const loginHandler = async (req, res) => {
    try {
       const { username, password } = req.body;
       const user = await authUsecase.loginUser(username, password);
      
       if (!user) {
          // Jika user null atau undefined, kirim respons kesalahan
          return res.status(401).json({ message: "Authentication failed: Invalid credentials" });
       }
 
       res.status(200).json({
          message: "login seccesfully",
          token: user.token,
       });
    } catch (error) {
       res.status(400).json({ message: "Internal server error", error: error.message });
    }
 };

module.exports = {
  loginHandler,
};
