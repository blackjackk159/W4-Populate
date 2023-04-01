require("./config/dbInit");
const cors = require("cors");
const express = require("express");
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);
app.use("/", postRoutes);

app.listen(3000, () => console.log("Server running at port 3000..."));
