const mongoose = require("mongoose");
const home = require("./routes/home");
const genres = require("./routes/genres");
const customers = require("./routes/customers");
const express = require("express");

mongoose
  .connect("mongodb://localhost/vidly")
  .then(() => console.log("Connected to vidly mongoDB..."))
  .catch((err) => console.error("Could NOT connect to DB", err));

const app = express();

app.use(express.json());

app.use("/api/genres", genres);
app.use("/api/customers", customers);
app.use("/", home);

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
