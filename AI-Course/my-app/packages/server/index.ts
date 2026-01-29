import express from "express";

const app = express();
const port = Bun.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(Bun.env.OPENAI_API_KEY + "!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
