const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const q = req.query;
  if (!!q && !!q.sname && !!q.spwd) {
    if (q.sname === "Sahil" && q.spwd === "1234") {
      res.send("Sahil logged in successfully!");
    } else if (q.sname === "Pritam" && q.spwd === "7890") {
      res.send("Pritam logged in successfully!");
    } else {
      res.send("Invalid user or password!");
    }
  } else {
    res.sendFile(__dirname + "/src/index.html");
  }
});

app.get("/test", (req, res) => {
  console.log("Hello Server! path: /test");
  res.send("Hello Browser! from /test");
});

app.get("/sahil", (req, res) => {
  console.log("Hello Server! path: /sahil");
  res.send("Hello Sahil!");
});

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
