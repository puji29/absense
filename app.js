const express = require("express")
const dotenv = require("dotenv")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const studentController = require("./controller/studentController")
const absensiController = require("./controller/absesnsi_controller")
const userController = require("./controller/user_controller")
// Use your router for the students endpoint
app.use('/api/v1', studentController);
app.use('/api/v1', absensiController);
app.use('/api/v1', userController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
