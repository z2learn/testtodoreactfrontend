const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const todoRoutes = require("./routes/todos");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api/todos", todoRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
