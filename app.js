const express = require("express")
const dotenv = require("dotenv")


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/v1', require("./routes"));


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
