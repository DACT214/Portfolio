const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});

const Author = mongoose.model("Author", authorSchema);

// const Course = mongoose.model(
//   "Course",
//   new mongoose.Schema({
//     name: String,
//     author: {
//       authorSchema,
//       // validation: author object required
//       require: true,
//     },
//   })
// );

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    authors: [authorSchema],
  })
);

async function createCourse(name, authors) {
  const course = new Course({
    name,
    authors,
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find();
  console.log(courses);
}

// async function updateAuthor(courseId) {
//   const course = await Course.findById(courseId);
//   course.author.name = "Mosh Hamedani";
//   course.save();
// }

// async function updateAuthor(courseId) {
//   const course = await Course.updateOne(
//     { _id: courseId },
//     {
//       $set: {
//         "author.name": "John Smith",
//       },
//     }
//   );
// }

async function updateAuthor(courseId) {
  course = await Course.updateOne(
    // replaces update() method (depercated)
    { _id: courseId },
    {
      $unset: {
        author: "",
      },
    }
  );
}

async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save();
}
async function removeAuthor(courseId, authorId) {
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.deleteOne(); // replaces remove() method (depercated)
  course.save();
}

// createCourse("Node Course", [
//   new Author({ name: "Mosh" }),
//   new Author({ name: "Jon" }),
// ]);

// updateAuthor("67f31ab04730d322e86850e7");

// addAuthor("67f31dcb5565d575ebd47f53", new Author({ name: "Amy" }));

removeAuthor("67f31dcb5565d575ebd47f53", "67f31dcb5565d575ebd47f52");
