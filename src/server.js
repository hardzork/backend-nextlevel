const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send({ ok: "Hello World" });
});

app.listen(3333);
