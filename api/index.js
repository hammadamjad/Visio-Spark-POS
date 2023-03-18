// create express servr

var express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

require("dotenv").config();

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.HAMMAD_ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: false })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Example app listening on port 5000!");
});
