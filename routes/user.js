const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router
  .post("/users", userController.createuser)
  .get("/users", userController.getusers)
  .get("/users/:id", userController.getuser)
  .put("/users/:id", userController.replaceuser)
  .patch("/users/:id", userController.updateuser)
  .delete("/users/:id", userController.deleteuser);

exports.router = router;
