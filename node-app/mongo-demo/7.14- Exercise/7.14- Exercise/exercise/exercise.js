const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connected to mongo-exercises"))
  .catch((err) => console.log("failed to connect.", err));

// {
// "tags":["express","backend"],
// "date":"2018-01-24T21:42:27.388Z",
// "name":"Express.js Course",
// "author":"Mosh",
// "isPublished":true,"price":10,
// }

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

async function getCourses() {
  return await Course.find({ isPublished: true, tags: "backend" })
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();
