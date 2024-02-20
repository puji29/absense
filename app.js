const express = require("express")
const dotenv = require("dotenv")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const studentController = require("./controller/studentController")

// Use your router for the students endpoint
app.use('/students', studentController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
