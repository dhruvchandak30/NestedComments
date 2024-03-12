const express = require("express");
const router = express.Router();
const dbConnect = require("./db");

router.get("/getComments", async (req, res) => {
  try {
    const client = await dbConnect();
    const database = client.db("Comments");
    const collection = database.collection("Posts");
    const userData = await collection.find({}).toArray();
    res.status(200).json({
      userData,
    });
    console.log("Comments Sent Successfully");
  } catch (err) {
    console.log("Error in Getting Users", err);
  }
});
module.exports = router;
