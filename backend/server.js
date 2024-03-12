const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./db");
var cors = require("cors");
app.use(cors());
app.use(express.json());
const commentRoutes = require("./router");

const PORT = process.env.PORT || 3001;
app.use("/api/v1/", commentRoutes);

app.listen(PORT, async () => {
  try {
    console.log("Started Server");
    const dbClient = await dbConnect();
    console.log(`Server Listening on Port ${PORT}`);
  } catch (error) {
    console.error("Error starting the server:", error);
  }
});
