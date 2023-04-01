const express = require("express");
const router = express.Router();
const PostsController = require("../controllers/posts");

router
  .route("/posts")
  .get(PostsController.getAll)
  .post(PostsController.createOne)
  .delete(PostsController.deleteAll);

module.exports = router;
