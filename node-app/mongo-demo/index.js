const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground") // IRL=> connection string should come from a config file rather than it being hard coded
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("could not connect to db... ", err));

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    //match: /patter/ (regex)
  },
  category: {
    type: String,
    required: true,
    enum: ["web", "mobile", "network"],
    lowercase: true, // uppercase
    trim: true,
  },
  author: String,
  tags: {
    type: Array,
    // custom validator vvvvvv
    validate: {
      validator: function (v) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const result = v && v.length > 0;
            resolve(result);
          }, 1000);
        });
      },
      message: "A course should have least one tag",
    },
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    min: 10,
    max: 200,
    get: (v) => Math.round(v),
    set: (v) => Math.round(v),
    required: function () {
      return this.isPublished;
    },
  },
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Angular Course",
    category: "Web",
    author: "Mosh",
    tags: ["frontend"],
    isPublished: true,
    price: 15.8,
  });
  try {
    const result = await course.save();
    console.log(result);
  } catch (err) {
    for (field in err.errors) console.log(err.errors[field].message);
  }
}

async function getCourse() {
  // comparison opperators

  // eq = equals
  // ne = not equals
  // gt greater than
  // gte greater than or equal to
  // lt less than
  // lte less than or equal to
  // in (uses an array)
  // nin = not in
  // examples:
  // .find({ price: { $gte: 10, $lte: 20 } })
  // .find({ price: { $in: [10, 15, 20] } })

  // logical opperators

  // or
  // and
  // examples:
  // .or([{ author: "Mosh" }, { isPublished: true }])
  // .and([{ author: "Mosh" }, { isPublished: true }])

  // Regular Expression (RegEx)

  // .find({author: /pattern/})
  // examples:

  // .find({ author: /^Mosh/ }) -> starts with 'mosh' with `^` at the begining of string

  // .find({ author: /Hamedani$/ }) -> ends with 'Hamedani' with `$` at end of string

  // .find({ author: /.*Mosh.*/ }) -> `.*` means we can have 0-infinately more characters

  // -> the `i` after the last slash will indicate case insensitive (case sensitive by default)

  const pageNumber = 2;
  const pageSize = 10;
  // /api/courses?pageNumber2&pageSize=10

  const courses = await Course.find({ _id: "66f1dae0be0364d0d68c53e6" })
    // .skip((pageNumber - 1) * pageSize)
    // .limit(pageSize)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1, price: 1 });
  console.log(courses[0].price);
}

async function updateCourse(id) {
  // Approach: Query first
  // findById() --> Modify its properties --> save()

  const result = await Course.findByIdAndUpdate(
    id,
    {
      $set: {
        author: "Jason",
        isPublished: false,
      },
    },
    { new: true }
  );

  // --> alt update method...
  // course.set({
  //   isPublished: true,
  //   author: "Another Author",
  // });

  console.log(result);

  // Approach: Update first
  //
}

async function removeCourse(id) {
  // const result = await Course.deleteMany({ _id: id });
  const course = await Course.findByIdAndDelete(id);
  console.log(course);
}

getCourse();
