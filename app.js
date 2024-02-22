const express = require("express")
const dotenv = require("dotenv")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const studentController = require("./controller/studentController")
const absensiController = require("./controller/absesnsi_controller")
// Use your router for the students endpoint
app.use('/students', studentController);
app.use('/students', absensiController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
