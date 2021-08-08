const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path")
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/index.route"));
app.use(express.static(path.resolve(__dirname, "client", "build")))
app.get("*", (req,res)=> {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})

const URL = process.env.URL;
const PORT = process.env.PORT;

async function start() {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    });
    app.listen(PORT, () => {
      console.log("Server has been ..." + process.env.PORT);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
