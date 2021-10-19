const express = require("express");

const app = express();

const tasks = require("./routes/tasks");

// middlewares

app.use(express.json());

// routes

app.get("/hello", (req, res) => {
  res.send("Task manager app");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

app.listen(port, console.log(`Server is listning on port ${port}`));
