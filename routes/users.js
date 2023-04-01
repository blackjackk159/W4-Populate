const express = require("express");
const router = express.Router();
const usersControllers = require("../controllers/usersControllers");

router
  .route("/")
  .get(usersControllers.getOne)
  .post(usersControllers.createOne)
  .delete(usersControllers.deleteAll);

module.exports = router;
