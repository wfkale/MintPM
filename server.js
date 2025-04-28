const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the build or dist folder
app.use(express.static(path.join(__dirname, "dist"))); // or 'build' for CRA

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html")); // or 'build'
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
