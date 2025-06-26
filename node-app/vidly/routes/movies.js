const { Movie, validate } = require("../models/movie");
const { Genre } = require("../models/genre");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const movie = await Movie.find();
  res.send(movie);
});

router.get("/:name", async (req, res) => {
  const movie = await Movie.find({ name: req.params.name });
  if (!movie) res.status(404).send("Genre with given NAME was not found");
  res.send(movie);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details);

  const genre = await Genre.findById(req.body.genreID);
  if (!genre) return res.status(404).send("Genre does not exist.");

  let movie = new Movie({
    name: req.body.name,
    genre: {
      _id: genre._id,
      name: genre.name,
    },
    numberInStock: req.body.numberInStock,
    dailyRentalRate: req.body.dailyRentalRate,
  });

  movie = await movie.save();
  res.send(movie);
});

router.put("/:name", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const movie = await Movie.findOneAndUpdate(
    { name: req.params.name },
    { name: req.body.name },
    { new: true }
  );

  if (!movie)
    return res.status(404).send("Genre with given NAME was not found");

  res.send(movie);
});

router.delete("/:id", async (req, res) => {
  const genre = await Movie.findByIdAndDelete(req.params.id);
  if (!genre) return res.status(404).send("Genre with given ID was not found");
  res.send(genre);
});

module.exports = router;
