const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/users", require("./routes/userRoutes"));
app.use("/products", require("./routes/productRoutes"));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
