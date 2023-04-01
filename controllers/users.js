const User = require("../models/users");

const getAll = async (req, res) => {
  try {
    const users = await User.find({
      name: { $regex: req.query.search },
    });

    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
    });
  }
};

const createOne = async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json({
      status: "success",
      data: userData,
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
    await User.deleteMany({});
    res.status(204).json({});
  } catch (err) {
    res.status(500).json({
      status: "error",
    });
  }
};

module.exports = { getAll, createOne, deleteAll };
