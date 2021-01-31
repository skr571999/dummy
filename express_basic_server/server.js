const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", async (req, res) => {
  res.send({ message: "Server Running ..." });
});

app.listen(PORT, () => console.log(`Serving on ${PORT}`));
