require("dotenv").config();

const express = require("express");
const models = require("./models/models");
const cors = require("cors");
const fileupload = require("express-fileupload");
const sequelize = require("./db");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileupload({}));
app.use("/api", router);

//рбробка помилок
app.use(errorHandler);

app.get(
  "/",

  (req, res) => {
    res.status(200).json({ message: "Working!" });
  }
);

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log(`bdready`);
    // await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
