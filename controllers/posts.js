const Post = require("../models/posts");

const getAll = async (req, res) => {
  try {
    const posts = await Post.find({
      content: { $regex: req.query.search },
    })
      .populate({ path: "user", select: "name photo" })
      .sort(req.query.sort);
      
    res.status(200).json({
      status: "success",
      data: posts,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
    });
  }
};

const createOne = async (req, res) => {
  try {
    const postData = await Post.create(req.body);
    res.status(200).json({
      status: "success",
      data: postData,
      message: "新增貼文成功",
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.errors ? err : "欄位填寫錯誤或查無此id",
    });
  }
};

const deleteAll = async (req, res) => {
  try {
    await Post.deleteMany({});
    res.status(204).json({});
  } catch (err) {
    res.status(500).json({
      status: "error",
    });
  }
};

module.exports = { getAll, createOne, deleteAll };
