const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 3000;

// Cors configuration - Allows requests from localhost:4200
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 204,
  methods: "GET",
};

// Use cors middleware
app.use(cors(corsOptions));

// Use express.json() middleware to parse JSON bodies of requests
app.use(express.json());

// GET route - Allows to get all the items
// example: localhost:3000/clothes
app.get("/products", (req, res) => {

  fs.readFile("db.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const jsonData = JSON.parse(data);

    res.status(200).json({
      items: jsonData.products,
      total: jsonData.products.length,
    });
  });
});

// GET route - Allows to get a specific item
// example: localhost:3000/clothes/1
app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  fs.readFile("db.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const jsonData = JSON.parse(data);

    res.status(200).json({
      item: jsonData.products.find((item) => item.id === id),
      total: 1,
    });
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
