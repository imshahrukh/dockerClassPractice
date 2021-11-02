const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "success",
    route: "https://localhost/",
  });
});

app.listen(PORT, (req, res) => {
  console.log(`Server running on Port ${PORT}`);
});
