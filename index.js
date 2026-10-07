const express = require("express");
const app = express();
const multer = require("multer");
const mongoose = require("mongoose");
const registationController = require("./controllers/registationController");
const allUserController = require("./controllers/allUserController");
const deleteUserController = require("./controllers/deleteUserController");
const editUserController = require("./controllers/editUserController");
// port
const Port = 8000;

// middlewares
app.use(express.json());

//  db connection
// mongodb+srv://node:KJqN8I4knLohC1ym@cluster0.fgcaw38.mongodb.net/?appName=Cluster0
mongoose
  .connect(
    "mongodb+srv://mnode2602:aS4TIySQKG5MnCh3@cluster0.fgcaw38.mongodb.net/?appName=Cluster0",
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

// routes
app.post("/registation", registationController);

app.get("/allusers", allUserController);

app.post("/editUser/:id",editUserController);
app.delete("/delete/:id", deleteUserController);

app.listen(Port, () => {
  console.log(`youre server running on \n localhost:${Port}`);
});
