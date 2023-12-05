const express = require("express");
const serverless = require("serverless-http");
const app = express();
const fairyTales = require("../fairyTales.json"); // Assuming fairyTales.json contains your data

// Route to get all fairy tales
app.get("/api/fairytales", (req, res) => {
  res.json(fairyTales);
});

// Route to get a single fairy tale by ID
app.get("/api/fairytales/:id", (req, res) => {
  const id = req.params.id;
  const tale = fairyTales.find((tale) => tale.id === id);
  if (!tale) {
    res.status(404).json({ message: "Fairy tale not found" });
  } else {
    res.json(tale);
  }
});

// Route to filter fairy tales by age
app.get('/api/fairytales/filterByAge/:age', (req, res) => {
  const requestedAge = req.params.age.toLowerCase();
  let filteredTales = [];

  if (requestedAge === 'all') {
    filteredTales = fairyTales;
  } else {
    filteredTales = fairyTales.filter(tale => {
      const taleAge = tale.age.toLowerCase();
      if (taleAge === requestedAge) {
        return true;
      } else {
        const [min, max] = requestedAge.split('-').map(num => parseInt(num));
        const [taleMin, taleMax] = taleAge.split('-').map(num => parseInt(num));
        return taleMin >= min && taleMax <= max;
      }
    });
  }

  if (filteredTales.length === 0) {
    res.status(404).json({ message: 'No fairy tales found for the specified age range' });
  } else {
    res.json(filteredTales);
  }
});
// Route to sort fairy tales by title (ascending and descending)
app.get("/api/fairytales/sortByTitle/:order", (req, res) => {
  const order = req.params.order.toLowerCase();
  let sortedTales = [];
  if (order === "asc") {
    sortedTales = fairyTales.sort((a, b) => a.title.localeCompare(b.title));
  } else if (order === "desc") {
    sortedTales = fairyTales.sort((a, b) => b.title.localeCompare(a.title));
  } else {
    return res.status(400).json({ message: "Invalid sorting order" });
  }
  res.json(sortedTales);
});

// Route to sort fairy tales by created_at (ascending and descending)
app.get("/api/fairytales/sortByCreatedAt/:order", (req, res) => {
  const order = req.params.order.toLowerCase();
  let sortedTales = [];
  if (order === "asc") {
    sortedTales = fairyTales.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );
  } else if (order === "desc") {
    sortedTales = fairyTales.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
  } else {
    return res.status(400).json({ message: "Invalid sorting order" });
  }
  res.json(sortedTales);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports.handler = serverless(app);