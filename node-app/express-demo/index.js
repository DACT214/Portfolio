const debug = require("debug")("app:startup");
const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
const Joi = require("joi");
const logger = require("./middleware/logger");
const authenticate = require("./middleware/authenticating");
const courses = require("./routes/courses");
const title = require("./routes/title");
const express = require("express");
const app = express();

app.set("view engine", "pug");
// app.set('view', './views');// default

debug(`NODE_ENV: ${process.env.NODE_ENV}`); //undefined default value
debug(`app: ${app.get("env")}`);

app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: true })); // key=value&key=value
app.use(express.static("public"));
app.use(helmet());
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  debug("Morgan enabled..."); // > console.log()
}
//Configuration
debug(`application name: ${config.get("name")}`);
debug(`mail server: ${config.get("mail.host")}`);
debug(`mail password: ${config.get("mail.password")}`);

app.use("/api/course", courses);
app.use("/", title);

// app.use(logger);
app.use(authenticate);

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
